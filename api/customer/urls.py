from django.urls import path
from .views import SignupVerifyView, SignupCodeView, LoginCodeView, LoginVerifyView



urlpatterns = [
    path('signup/code', SignupCodeView, name='customer-signup-code'),
    path('signup/verify', SignupVerifyView, name='customer-signup-verify'),
    path('login/code', LoginCodeView, name='customer-login-code'),
    path('login/verify', LoginVerifyView, name='customer-login-verify'),
]
