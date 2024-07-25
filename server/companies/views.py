from django.shortcuts import render
from django.http import JsonResponse
from .models import Companies
from companies.models import Locations

# function to retrieve all the companies
def get_all_companies(request):
    companies = Companies.objects.all()
    companies_list = list(companies.values('id','name', 'address', 'latitude', 'longitude'))
    return JsonResponse(companies_list, safe=False)


def get_locations_by_company(request, company_id):
    # Query all locations with the specified company_id
    locations = Locations.objects.filter(company_id=company_id)
    print(locations)
    # Convert the queryset to a list of dictionaries
    locations_list = list(locations.values('id', 'name', 'address', 'latitude', 'longitude'))

    # Return the data as JSON
    return JsonResponse(locations_list, safe=False)