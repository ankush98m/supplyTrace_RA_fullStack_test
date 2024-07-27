# supplyTrace_RA_fullStack_test
A small application to display the companies in a list and to display all the locations of a company.
The application is developed using react in the frontend and django in the frontend.

### Features
- Click on the company to see its company details
- All the locations are marked on the map, zoom out or in to view the location
- Click on the location to directly find the location on the map

## Prequesites
- Install Python 3.9.x
- Install Node and npm (node package manager)
- Install Docker Desktop
- Install IDE (preferrably VS code)

## How to Run
- go to server directory
- Run migrations in the terminal file
  -  python manage.py makemigrations (windows) python3 manage.py makemigrations (macos)
  -  python manage.py migrate (windows) python3 manage.py migrate (macos)
- go to source directory of the project
- Run command: docker-compose up --build
- React app will run in localhost:3000
- Django app will run in localhost:8000
