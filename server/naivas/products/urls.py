from django.urls import path
from . import views

urlpatterns = [
    path('products/', views.ProductsView.as_view()),
    path('orders/<int:pk>/', views.OrderView.as_view()),
    path('orders/', views.CreateOrder.as_view()),
]