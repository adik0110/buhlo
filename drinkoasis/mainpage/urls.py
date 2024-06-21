from django.urls import path
from .views import bottle_list

urlpatterns = [
    path('bottles/', bottle_list, name='bottle-list'),
]
