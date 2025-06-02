from django.urls import path
from .views import SignupVerifyView, SignupCodeView



urlpatterns = [
    path('signup/code', SignupCodeView.as_view(), name='customer-signup-code'),
    path('signup/verify', SignupVerifyView, name='customer-signup-verify'),
]
