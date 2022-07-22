import uuid

from django.contrib.auth.models import AbstractUser
from django.db import models


class Users(AbstractUser):
    nickname = models.CharField(blank=False, unique=True ,max_length=30)
    social_url = models.CharField(blank=True, max_length=255)
    hometown = models.CharField(blank=True, max_length=255)
    memo = models.TextField(blank=False)
    profile_image = models.CharField(blank=False)