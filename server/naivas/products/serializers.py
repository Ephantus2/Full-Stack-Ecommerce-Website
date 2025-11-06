from rest_framework import serializers
from .models import Products, Order
from accounts.serializers import UserSerializer
from django.contrib.auth.models import User

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields = ['id', 'image', 'description', 'offer', 'rating', 'price']
        
class OrderSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(
        write_only=True,
        queryset = User.objects.all()
    )
    
    user_details = UserSerializer(source='user', read_only=True)
    
    products = ProductSerializer(many=True, read_only=True)
    
    product_ids = serializers.PrimaryKeyRelatedField(
        write_only = True,
        queryset = Products.objects.all(),
        many = True
    )
    
    class Meta:
        model = Order
        fields = ['id', 'date', 'time', 'user', 'user_details', 'products', 'product_ids']
        read_only_fields = ['date', 'time', 'user_details', 'products']
        
        
    def create(self, validated_data):
        product_ids = validated_data.pop('product_ids', [])
        order = Order.objects.create(**validated_data)
        order.products.set(product_ids)
        return order