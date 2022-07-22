from rest_framework import serializers
from .models import User


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name', 'email', 'password', 'profile_image')
        read_only_fields = ['profile_image']

    def validate_last_name(self, value):
        return value.upper()

    def create(self, validated_data):
        password = validated_data.get('password')
        new_user = super().create(validated_data)
        new_user.set_password(password)
        new_user.save()
        return new_user
