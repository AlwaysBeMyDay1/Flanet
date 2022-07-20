from rest_framework.routers import DefaultRouter
from django.urls import include, path
from . import views

app_name = 'users'

router = DefaultRouter

urlpatterns = router.urls