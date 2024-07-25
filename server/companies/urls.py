from django.urls import path
from .views import get_all_companies, get_locations_by_company

urlpatterns = [
    path('', get_all_companies, name='get_all_companies'),
    path('<int:company_id>/', get_locations_by_company, name='get_locations_by_company'),
]