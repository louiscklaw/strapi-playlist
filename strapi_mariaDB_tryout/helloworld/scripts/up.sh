#!/usr/bin/env bash

docker-compose build
sudo docker-compose kill 
sudo docker-compose down --remove-orphans
docker-compose up
