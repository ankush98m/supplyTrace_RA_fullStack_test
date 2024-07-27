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
- Open Terminal and go to source directory of the project
- Run command: docker-compose up --build
- if react app doesn't start
    - go to comapny-app directory
    - run command in terminal : npm install
- React app will run in localhost:3000
- Django app will run in localhost:8000
