from django.urls import path
from .views import get_products, get_product, get_categories, get_category, get_category_products

urlpatterns = [
    path('products/', get_products, name='get_products'),
    path('products/<int:id>/', get_product, name='get_product'),
    path('categories/', get_categories, name='get_categories'),
    path('categories/<int:id>/', get_category, name='get_category'),
    path('categories/<int:id>/products/', get_category_products, name='get_category_products'),
]
