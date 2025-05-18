from django.contrib import admin
from .models import Customer, RestaurantManager, User

admin.site.register(Customer)
admin.site.register(RestaurantManager)
admin.site.register(User)