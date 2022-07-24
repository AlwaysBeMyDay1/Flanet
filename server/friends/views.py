from rest_framework import status
from rest_framework.permissions import IsAuthenticated, IsAdminUser, AllowAny
from rest_framework.permissions import IsAuthenticatedOrReadOnly, AllowAny
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from .models import Friends
from .permissions import IsUser
from .serializers import FriendsSerializer


class FriendsViewSet(ModelViewSet):
    # 입력된 값을 validate/deserialize/serialize할 때 사용하는 serializer 클래스
    queryset = Friends.objects.all() # View에서 객체를 반환하는 데 사용해야 하는 쿼리셋
    serializer_class = FriendsSerializer

    def get_permissions(self):
        if self.action == 'list':
            permission_classes = [IsAdminUser]
        elif self.action == 'create' or self.action == 'retrieve':
            permission_classes = [AllowAny]
        else :
            permission_classes = [IsUser]
        return [permission() for permission in permission_classes]
