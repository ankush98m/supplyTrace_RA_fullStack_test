from django.urls import path
from .views import get_all_companies

urlpatterns = [
    path('', get_all_companies, name='get_all_companies'),
]