from django.urls import path
from .views import get_all_companies

urlpatterns = [
    path('all/', get_all_companies, name='get_all_companies'),
]