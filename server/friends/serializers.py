from rest_framework import serializers
from django.shortcuts import get_object_or_404
from users.serializers import UserSerializer
from .models import Friends
from users.models import User


class FriendsSerializer(serializers.ModelSerializer):
    user_one = UserSerializer()
    user_two = UserSerializer()
    
    class Meta:
        model = Friends
        fields = ('id', 'user_one', 'user_two', 'created_date', 'meeting_count')