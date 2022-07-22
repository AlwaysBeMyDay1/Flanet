from rest_framework.permissions import IsAuthenticated, IsAdminUser, AllowAny
from rest_framework.viewsets import ModelViewSet

from .models import User
from .serializers import UserSerializer

class UsersViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_permissions(self):
        if self.action == 'list':
            permission_classes = [IsAdminUser]
        elif self.action == 'create' or self.action == 'retrieve':
            permission_classes = [AllowAny]
        else:
            permission_classes = [IsAuthenticated]
        return [permission() for permission in permission_classes]


# class GroupViewSet(ModelViewSet):
#     serializer_class = GroupSerializer
#     queryset = Group.objects.all()

#     def get_permissions(self):
#         if self.action == 'detail':
#             permission_classes = [IsMember]
#         return [permission() for permission in permission_classes]