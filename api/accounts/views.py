from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .models import MyUser, Customer, RestaurantManager


def CreateUser(data, customer: bool):
    firstName = data.get('firstName')
    lastName = data.get('lastName')
    phone = data.get('phone')
    if not all([firstName, lastName, phone]):
        return 1
    existing_user = MyUser.objects.filter(phone=phone, isCustomer=customer)
    if existing_user.exists():
        return 2
    user = MyUser.objects.create(
        firstName=firstName,
        lastName=lastName,
        phone=phone,
        isCustomer=customer,
        isRestaurantManager=not customer,
    )
    if customer:
        customer = Customer.objects.create(
            user=user,
        )
    else:
        restaurantManager = RestaurantManager.objects.create(
            user=user,
        )
    user.save()
    return 3


class CreateCustomerView(APIView):
    def post(self, request):
        res = CreateUser(request.data, True)
        if res == 1:
            return Response({'message': 'اطلاعات ورودی ناقص است.', 'status': 'required'},
                            status=status.HTTP_400_BAD_REQUEST)
        elif res == 2:
            return Response({'message': 'این شماره یک حساب کاربری فعال دارد.', 'status': 'exist'},
                            status=status.HTTP_400_BAD_REQUEST)
        elif res == 3:
            return Response({'message': 'حساب کاربری با موفقیت ایجاد شد.', 'status': 'success'},
                            status=status.HTTP_201_CREATED)
        else:
            return Response({'message': 'خطای ناشناخته ای رخ داده است.', 'status': 'error'},
                            status=status.HTTP_400_BAD_REQUEST)


class CreateRestaurantManagerView(APIView):
    def post(self, request):
        res = CreateUser(request.data, False)
        if res == 1:
            return Response({'message': 'اطلاعات ورودی ناقص است.', 'status': 'required'},
                            status=status.HTTP_400_BAD_REQUEST)
        elif res == 2:
            return Response({'message': 'این شماره تلفن یک حساب کاربری فعال دارد.', 'status': 'exist'},
                            status=status.HTTP_400_BAD_REQUEST)
        elif res == 3:
            return Response({'message': 'حساب کاربری با موفقیت ایجاد شد.', 'status': 'success'},
                            status=status.HTTP_201_CREATED)
        else:
            return Response({'message': 'خطای ناشناخته ای رخ داده است.', 'status': 'error'},
                            status=status.HTTP_400_BAD_REQUEST)
