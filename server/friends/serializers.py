from dataclasses import field
from rest_framework import serializers

from users.serializers import UserSerializer
from .models import Friends
from users.models import User


class FriendsSerializer(serializers.ModelSerializer):
    user_one = serializers.SerializerMethodField()
    user_two = serializers.SerializerMethodField()
    class Meta:
        model = Friends
        fields = ('user_one', 'user_two', 'created_date', 'meeting_count')
        
    def get_user_one(self, obj):
        queryset = User.objects.filter(id=obj.user_one)
        return_query = UserSerializer(queryset)
        return return_query

    def get_user_two(self, obj):
        queryset = User.objects.filter(id=obj.user_two)
        return_query = UserSerializer(queryset)
        return  return_query
