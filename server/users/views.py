from django.conf import settings
from django.contrib.auth import authenticate
import jwt
from rest_framework import status
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated, IsAdminUser, AllowAny
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from friends.models import Friends
from .models import User
from .permissions import IsUser
from .serializers import UserSerializer


class UsersViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
    def get_permissions(self):
        if self.action == 'list':
            permission_classes = [IsAdminUser]
        elif self.action == 'create' or self.action == 'retrieve':
            permission_classes = [AllowAny]
        else :
            permission_classes = [IsUser]
        return [permission() for permission in permission_classes]

    @action(methods=['post'], detail=False)
    def login(self, request):
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
    
    def get_friends_list(self, friend_element, new_friends_list):
        friends = Friends.objects.filter(user_one=friend_element['id'])
        for friend in friends:
            queryset = self.get_queryset().filter(pk=friend.user_two.pk)
            serializer = self.get_serializer(queryset, many=True)
            if serializer.data[0] not in new_friends_list:
                new_friends_list.append(serializer.data[0])
        return new_friends_list

    @action(detail=True)
    def friends(self, request, pk):
        user = request.user
        if user.is_authenticated:
            
            # get list of my friends
            my_friends_one_list = []
            friends = Friends.objects.filter(user_one=user.pk)
            for friend in friends:
                queryset = self.get_queryset().filter(pk=friend.user_two.pk)
                serializer = self.get_serializer(queryset, many=True)
                my_friends_one_list.append(serializer.data[0])

            # get list of my friends' friends
            my_friends_two_list = []
            for friend_one in my_friends_one_list:
                self.get_friends_list(friend_one, my_friends_two_list)

            # get list of my friends' friends' friends
            my_friends_three_list = []
            for friend_two in my_friends_two_list:
                self.get_friends_list(friend_two, my_friends_three_list)

            data = {
                "one" : my_friends_one_list,
                "two" : my_friends_two_list,
                "three" : my_friends_three_list
            }
            return Response(data)