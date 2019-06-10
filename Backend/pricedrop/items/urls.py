"""Item Api Urls"""

from django.urls import path
from . import views

urlpatterns = [
    path('api/item', views.ItemViewSet)
]