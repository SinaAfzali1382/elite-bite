from django.urls import path
from .views import AddRestaurantView

urlpatterns = [
    path('add', AddRestaurantView.as_view(), name='restaurant-add'),
]
