from rest_framework import fields, serializers

from users.serializers import UserSerializer
from .models import Friends
from users.models import User


class FriendsSerializer(serializers.ModelSerializer):
    user_one = fields.SerializerMethodField()
    user_two = fields.SerializerMethodField()
    class Meta:
        model = Friends
        fields = ('id', 'user_one', 'user_two', 'created_date', 'meeting_count')
        
    def get_user_one(self, obj):
        queryset = User.objects.filter(username=obj.user_one)
        return_query = UserSerializer(queryset, many=True)
        return return_query.data[0]

    def get_user_two(self, obj):
        queryset = User.objects.filter(username=obj.user_two)
        return_query = UserSerializer(queryset, many=True)
        return return_query.data[0]