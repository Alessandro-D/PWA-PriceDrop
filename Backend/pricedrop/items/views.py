from django.shortcuts import render
from items.models import Item
from items.serializers import ItemSerializer
from rest_framework import viewsets
from rest_framework.permissions import AllowAny

# Create your views here.

class ItemViewSet(viewsets.ModelViewSet):
    """
    Item ModelViewSet
    """
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
    permission_classes =  [AllowAny]