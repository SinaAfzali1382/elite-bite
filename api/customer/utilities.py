import random

from userVerification.models import VerificationCode
from services.EmailService import sendEmail
from utilities.authHtmlPage import authHtml


def SendSignupCode(email: str):
    code = random.randint(10000, 99999)
    html = authHtml("کد تایید ثبت نام شما در elite bite", code)
    status = sendEmail(email, "کد تایید ثبت نام در elite bite", html)
    if status:
        code = VerificationCode.objects.create(email=email, code=code, forLogin=False)
        code.save()
        return True
    else:
        return False