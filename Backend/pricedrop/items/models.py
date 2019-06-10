from django.db import models

# Create your models here.

class Item(models.Model):
    """
    Item Model
    """
    name = models.CharField(max_length=200)
    code = models.CharField(max_length=200)
    url = models.CharField(max_length=200)
    date_added = models.DateTimeField(auto_now_add=True)
    price_query = models.CharField(max_length=200)
    img_query = models.CharField(max_length=200)
    old_price = models.DecimalField(max_digits=8, decimal_places=2)
    new_price = models.DecimalField(max_digits=8, decimal_places=2)