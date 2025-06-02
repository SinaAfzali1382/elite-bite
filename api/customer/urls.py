from django.urls import path
from .views import SignupVerifyView, SignupCodeView



urlpatterns = [
    path('signup/code', SignupCodeView, name='customer-signup-code'),
    path('signup/verify', SignupVerifyView, name='customer-signup-verify'),
]
