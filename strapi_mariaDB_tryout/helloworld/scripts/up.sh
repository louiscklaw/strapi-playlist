#!/usr/bin/env bash

docker-compose build
docker-compose kill 
docker-compose down --remove-orphans -v
docker-compose up -d
