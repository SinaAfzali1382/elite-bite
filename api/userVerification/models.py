from django.db import models

class VerificationCode(models.Model):
    code = models.CharField(max_length=5)
    email = models.EmailField()
    sendDate = models.DateTimeField(auto_now_add=True)
    forLogin = models.BooleanField(default=False)
    used = models.BooleanField(default=False)
    role = models.CharField(max_length=100, default='customer')