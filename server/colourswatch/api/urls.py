from django.urls import path
from .views import fetchcolour

urlpatterns = [
    path('fetchcolour/', fetchcolour, name='fetchcolour')
]