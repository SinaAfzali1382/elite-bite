from django.urls import path
from .views import CreateCustomerView, CreateRestaurantManagerView

urlpatterns = [
    path('customers/create', CreateCustomerView.as_view(), name='create-customer'),
    path('owners/create', CreateRestaurantManagerView.as_view(), name='create-manager'),
]
