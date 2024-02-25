docker-compose down

#build front-end image
docker build -t frontend-pagnet:latest .

# start environment 
docker-compose up --build --force-recreate --remove-orphans