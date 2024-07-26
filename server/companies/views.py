from django.shortcuts import render
from django.http import JsonResponse
from .models import Companies
from django.shortcuts import get_object_or_404
from .models import Locations

# function to retrieve all the companies
def get_all_companies(request):
    companies = Companies.objects.all()
    companies_list = list(companies.values('id', 'name', 'address', 'latitude', 'longitude'))
    return JsonResponse(companies_list, safe=False)

# function to get company details by ID
def get_company_by_id(request, company_id):
    # Query the company with the specified company_id
    company = get_object_or_404(Companies, pk=company_id)
    # retrieve all the locations of the company
    locations = Locations.objects.filter(company_id=company_id).values('name', 'address', 'latitude', 'longitude')
    # Convert the company object to a dictionary
    company_data = {
        'id': company.id,
        'name': company.name,
        'address': company.address,
        'latitude': company.latitude,
        'longitude': company.longitude,
        'locations': list(locations)
    }

    # Return the data as JSON
    return JsonResponse(company_data)