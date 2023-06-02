from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    email = models.EmailField(unique=True)
    contact = models.IntegerField(blank=True, null=True)
    
    REQUIRED_FIELDS = ['email', 'first_name', 'last_name']
