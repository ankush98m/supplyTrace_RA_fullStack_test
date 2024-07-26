from django.urls import path
from .views import get_all_companies, get_company_by_id

urlpatterns = [
    path('', get_all_companies, name='get_all_companies'),
    path('<int:company_id>/', get_company_by_id, name='get_company_by_id'),
]