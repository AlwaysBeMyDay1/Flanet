from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticatedOrReadOnly, AllowAny
from .serializers import FriendsSerializer
from .models import Friends

class FriendsViewSet(ModelViewSet):
    
    permission_classes = [AllowAny] # 비인증 요청에게는 읽기 권한만 허용
    serializer_class = FriendsSerializer
    # 입력된 값을 validate/deserialize/serialize할 때 사용하는 serializer 클래스
    queryset = Friends.objects.all() # View에서 객체를 반환하는 데 사용해야 하는 쿼리셋