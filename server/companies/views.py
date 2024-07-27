from django.shortcuts import render
from django.http import JsonResponse
from .models import Companies
from django.shortcuts import get_object_or_404
from .models import Locations
from django.core.exceptions import ObjectDoesNotExist

# function to retrieve all the companies
# endpoint : GET /companies
# Response type : JSON Array
# Error Codes : 500 - Internal server error
def get_all_companies(request):
    try:
        companies = Companies.objects.all()
        companies_list = list(companies.values('id', 'name', 'address', 'latitude', 'longitude'))
        return JsonResponse(companies_list, safe=False)
    except Exception as e:
        return JsonResponse({'error': 'An error occurred while retrieving companies.', 'details': str(e)}, status=500)

# function to get company details by ID and all the locations of the company
# endpoint : GET /companies/{company_id}
# Response type : JSON Array
# Error Code : 404 - Company Not Found, 500 - Internal Server Error
def get_company_by_id(request, company_id):
    try:
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
    except ObjectDoesNotExist:
        return JsonResponse({'error': 'Company not found.'}, status=404)
    except Exception as e:
        return JsonResponse({'error': 'An error occurred while retrieving company details.', 'details': str(e)},
                            status=500)