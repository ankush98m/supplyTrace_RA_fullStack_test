import csv
from django.core.management.base import BaseCommand
import pandas as pd
from companies.models import Companies

class Command(BaseCommand):
    help = 'Load data from CSV files'

    def add_arguments(self, parser):
        parser.add_argument('companies_csv', type=str, help='The path to the companies CSV file')
        parser.add_argument('locations_csv', type=str, help='The path to the locations CSV file')

    def handle(self, *args, **options):
        companies_csv = options['companies_csv']
        locations_csv = options['locations_csv']

        companies_data = pd.read_csv(companies_csv)
        locations_data = pd.read_csv(locations_csv)

        # dictionary to map company IDs to Company objects
        company_id_map = {}

        for index, row in companies_data.iterrows():
            company = Companies.objects.create(
                name=row['name'],
                address=row['address'],
                latitude=row['latitude'],
                longitude=row['longitude']
            )
            company_id_map[row['company_id']] = company

        for index, row in locations_data.iterrows():
            company = company_id_map[row['company_id']]
            Locations.objects.create(
                company_id=company,
                name=row['name'],
                address=row['address'],
                latitude=row['latitude'],
                longitude=row['longitude']
            )
        self.stdout.write(self.style.SUCCESS('Companies and Locations data loaded successfully'))
