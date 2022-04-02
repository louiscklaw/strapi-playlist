#!/usr/bin/env bash

docker-compose build
sudo docker-compose kill 
sudo docker-compose down --remove-orphans -v
docker-compose up -d
