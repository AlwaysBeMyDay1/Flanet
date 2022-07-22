from rest_framework.permissions import IsAuthenticated, IsAdminUser, AllowAny
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework import status

from rest_framework.decorators import action
from django.contrib.auth import authenticate
import jwt
from django.conf import settings

from .models import User
from .serializers import UserSerializer

class UsersViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]
    
    
    def get_permissions(self):
        permission_classes = [AllowAny]
        return [permission() for permission in permission_classes]

    @action(methods=['post'], detail=False)
    def login(self, request):
        print("✅✅✅✅✅✅✅")
        username = request.data.get('username')
        password = request.data.get('password')
        if not username or not password:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        user = authenticate(username=username, password=password)
        if user:
            encoded_jwt = jwt.encode({'pk':user.pk}, settings.SECRET_KEY, algorithm='HS256')
            return Response(data={"token":encoded_jwt, "id":user.pk})
        else:
            return Response(status=status.HTTP_401_UNAUTHORIZED)
