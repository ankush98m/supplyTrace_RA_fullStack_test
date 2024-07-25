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

        for index, row in companies_data.iterrows():
            Companies.objects.create(
                name=row['name'],
                address=row['address'],
                latitude=row['latitude'],
                longitude=row['longitude']
            )

        self.stdout.write(self.style.SUCCESS('Companies and Locations data loaded successfully'))
