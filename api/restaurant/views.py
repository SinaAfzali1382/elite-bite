import os
import secrets
from django.conf import settings
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Restaurant
from restaurantManager.services import isLoggedInRestaurantManager
from .validator import validateRestaurantData

class AddRestaurantView(APIView):
    def post(self, request):
        # authorization
        manager = isLoggedInRestaurantManager(request)
        if not manager:
            return Response({
                "status": "unauthorized",
                "message": "دسترسی غیرمجاز"
            }, status=status.HTTP_401_UNAUTHORIZED)

        image_file = request.FILES.get("image")
        allowed_types = ['image/jpeg', 'image/png', 'image/jpg']
        # image validation
        if not image_file:
            return Response({
                "status": "error",
                "message": "تصویر ارسال نشده است."
            }, status=status.HTTP_400_BAD_REQUEST)

        if image_file.content_type not in allowed_types:
            return Response({
                "status": "error",
                "message": "فرمت تصویر نامعتبر است. فقط jpg، jpeg و png مجاز هستند."
            }, status=status.HTTP_400_BAD_REQUEST)

        if image_file.size > 1024 * 1024:
            return Response({
                "status": "error",
                "message": "حجم عکس نباید از یک مگابایت بیشتر باشد."
            }, status=status.HTTP_400_BAD_REQUEST)

        # validation
        data = request.data.copy()
        validation_error = validateRestaurantData(data)
        if validation_error:
            return Response({
                "status": "error",
                "message": validation_error
            }, status=status.HTTP_400_BAD_REQUEST)

        if Restaurant.objects.filter(owner=manager).exists():
            return Response({
                "status": "error",
                "message": "شما قبلاً یک رستوران ثبت کرده‌اید."
            }, status=status.HTTP_400_BAD_REQUEST)

        # upload image
        ext = os.path.splitext(image_file.name)[1]
        random_name = secrets.token_hex(32) + ext

        image_path = os.path.join(settings.BASE_DIR, "public\images", random_name)
        os.makedirs(os.path.dirname(image_path), exist_ok=True)

        with open(image_path, "wb+") as destination:
            for chunk in image_file.chunks():
                destination.write(chunk)

        restaurant = Restaurant.objects.create(
            owner=manager,
            name=data['name'].strip(),
            description=data.get('description', '').strip(),
            image='/public/images/' + random_name,
            address=data['address'].strip(),
            city=int(data['city']),
            areas=','.join(data.getlist('areas[]')),
            areasPrices=','.join([str(p) for p in data.getlist('areasPrices[]')]),
            phoneNumber=data['phoneNumber'].strip(),
            contactEmail=data['contactEmail'].strip(),
            startWorkHour=int(data['startWorkHour']),
            endWorkHour=int(data['endWorkHour']),
            deliveryFeeBase=float(data['deliveryFeeBase']),
            freeDeliveryThreshold=data.get('freeDeliveryThreshold'),
            bankAccountNumber=data['bankAccountNumber'].strip(),
            commissionRate=5.00
        )

        return Response({
            "status": "success",
            "message": "رستوران با موفقیت اضافه شد.",
            "restaurantId": restaurant.id
        }, status=status.HTTP_201_CREATED)
