from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    pass

class MyUser(models.Model):
    isCustomer = models.BooleanField(default=False)
    isRestaurantManager = models.BooleanField(default=False)
    phone = models.CharField(max_length=11)
    firstName = models.CharField(max_length=20)
    lastName = models.CharField(max_length=25)

class Customer(models.Model):
    user = models.OneToOneField(MyUser, on_delete=models.CASCADE)
    address = models.TextField()

class RestaurantManager(models.Model):
    user = models.OneToOneField(MyUser, on_delete=models.CASCADE)
    restaurantName = models.CharField(max_length=100, blank=True, null=True)
