from django.shortcuts import render
from django.http import JsonResponse
from .models import Companies

# function to retrieve all the companies
def get_all_companies(request):
    companies = Companies.objects.all()
    companies_list = list(companies.values('id','name', 'address', 'latitude', 'longitude'))
    return JsonResponse(companies_list, safe=False)