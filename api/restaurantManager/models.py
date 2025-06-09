from django.db import models

class RestaurantManager(models.Model):
    email = models.EmailField(max_length=255, unique=True)
    firstName = models.CharField(max_length=20)
    lastName = models.CharField(max_length=25)
    isVerified = models.BooleanField(default=False)