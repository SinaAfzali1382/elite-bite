from datetime import timedelta
from django.utils import timezone
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .models import Customer
from userVerification.models import VerificationCode
from .utilities import SendSignupCode


class SignupCodeView(APIView):
    def post(self, request):
        data = request.data
        firstName = data.get('firstName')
        lastName = data.get('lastName')
        email = data.get('email')
        existing_user = Customer.objects.filter(email=email, isVerified=True)
        notVerifiedUser = Customer.objects.filter(email=email, isVerified=False)
        time_threshold = timezone.now() - timedelta(seconds=120)
        codeSent = VerificationCode.objects.filter(email=email, used=False, sendDate__gte=time_threshold)
        if not all([firstName, lastName, email]):
            return Response({'message': 'اطلاعات ورودی ناقص است.', 'status': 'required'},
                            status=status.HTTP_400_BAD_REQUEST)
        elif notVerifiedUser.exists() and codeSent.exists():
            return Response(
                {'message': 'کد تائید ثبت نام در کمتر از 2 دقیقه اخیر به ایمیل شما ارسال شده است و هنوز معتبر است.',
                 'status': 'success'},
                status=status.HTTP_200_OK)
        elif notVerifiedUser.exists():
            sentEmail = SendSignupCode(email)
            if not sentEmail:
                return Response({'message': 'مشکلی در ارسال کد بوجود آمده است.','status': 'error'},
                                status=status.HTTP_400_BAD_REQUEST)
            Customer.objects.update_or_create(email=email, firstName=firstName, lastName=lastName)
            return Response({'message': 'این ایمیل یک حساب کاربری غیرفعال دارد. کد تایید به ایمیل شما ارسال شد. در صورت تایید، حساب کاربری شما با اطلاعاتی که الان وارد کرده اید تایید می شود.', 'status': 'success'},
                            status=status.HTTP_200_OK)
        elif existing_user.exists():
            return Response({'message': 'این ایمیل یک حساب کاربری فعال دارد.', 'status': 'exist'},
                            status=status.HTTP_409_CONFLICT)
        else:
            customer = Customer.objects.create(
                firstName=firstName,
                lastName=lastName,
                email=email,
                isVerified=False,
            )
            customerSave = customer.save()
            if not customerSave:
                return Response({'message': 'خطا در ذخیره اطلاعات، لطفا مجدد تلاش کنید یا با پشتیبانی تماس بگیرید.', 'status': 'error'},
                            status=status.HTTP_400_BAD_REQUEST)
            sentEmail = SendSignupCode(email)
            if not sentEmail:
                return Response({'message': 'مشکلی در ارسال کد بوجود آمده است.', 'status': 'error'},
                                status=status.HTTP_400_BAD_REQUEST)
            return Response({'message': 'کد تائید ثبت نام برای ایمیل شما ارسال شد.', 'status': 'success'},
                            status=status.HTTP_200_OK)



class SignupVerifyView:
    def post(self, request):
        pass