from django.contrib import admin
from . import models


@admin.register(models.Friends)
class FriendsAdmin(admin.ModelAdmin):

    list_display = (
        "user_one",
        "user_two",
    )