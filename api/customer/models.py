from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    pass

class Customer(models.Model):
    email = models.EmailField(max_length=255, unique=True, default=None)
    firstName = models.CharField(max_length=20, default=None)
    lastName = models.CharField(max_length=25, default=None)
    isVerified = models.BooleanField(default=False)
    address = models.TextField()