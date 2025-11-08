from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .serializers import ProductSerializer, OrderSerializer
from .models import Products, Order
from django.db.models import Q

# class to get all products 
class ProductsView(APIView):
    permission_classes = [IsAuthenticated]
    #get all products from database
    def get(self, request):
        search_query = request.GET.get('search', '')
        if search_query:
            products = Products.objects.filter(Q(category__icontains=search_query) | Q(description__icontains=search_query))
        else:
            products = Products.objects.all()

        serializedData = ProductSerializer(products, many=True)
        return Response(serializedData.data, status=status.HTTP_200_OK)
    
    #create a new product
    
    def post(self, request):
        data = request.data
        serializedData = ProductSerializer(data=data)
        if serializedData.is_valid():
            serializedData.save()
            return Response(serializedData.data, status=status.HTTP_200_OK)
        return Response(serializedData.errors, status=status.HTTP_400_BAD_REQUEST)
    

# class to get all orders
class OrderView(APIView):
    #get all orders from the database  
    permission_classes = [IsAuthenticated] 
    
    def get(self, request, pk):
        order = Order.objects.select_related('user').prefetch_related('products').filter(user=pk)
        serializedData = OrderSerializer(order, many=True)
        return Response(serializedData.data, status=status.HTTP_200_OK)
    

class CreateOrder(APIView):
    #create a new orders
    permission_classes = [IsAuthenticated]
    
    def post(self, request):
        data = request.data
        serializedData = OrderSerializer(data=data)
        if serializedData.is_valid():
            serializedData.save()
            return Response(serializedData.data, status=status.HTTP_200_OK)
        return Response(serializedData.errors, status=status.HTTP_400_BAD_REQUEST)