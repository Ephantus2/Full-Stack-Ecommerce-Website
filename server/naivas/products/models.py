from django.db import models
from django.contrib.auth.models import User

# products model

class Products(models.Model):
    image = models.ImageField(upload_to='photos')
    description = models.CharField(max_length=150)
    offer = models.CharField(max_length=200)
    rating = models.CharField(max_length=10)
    price = models.IntegerField()
    category = models.CharField(max_length=100)
    

class Order(models.Model):
    id = models.CharField(max_length=100, primary_key=True)
    date = models.DateField(auto_now_add=True)
    time = models.TimeField(auto_now_add=True)
    user = models.ForeignKey(User, related_name='order', on_delete=models.CASCADE)
    products = models.ManyToManyField(Products, related_name='order')