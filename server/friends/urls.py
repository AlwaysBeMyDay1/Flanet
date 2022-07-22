from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

app_name = "friends"

router = DefaultRouter()
router.register(r'post',views.FriendsViewSet)

urlpatterns = [
    path('',include(router.urls)),
]