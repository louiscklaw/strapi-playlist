#!/usr/bin/env bash

server_log=./app/build/index.html

wait_file() {
  local file="$1"; shift
  local wait_seconds="${1:-10}"; shift # 10 seconds as default timeout
  test $wait_seconds -lt 1 && echo 'At least 1 second is required' && return 1

  until test $((wait_seconds--)) -eq 0 -o -e "$file" ; do sleep 1; done

  test $wait_seconds -ge 0 # equivalent: let ++wait_seconds
}


./scripts/backup_db.sh
./scripts/backup_strapi.sh
sleep 3

docker-compose build
sudo docker-compose kill 
sudo docker-compose down --remove-orphans
sleep 3

sudo rm -rf data
docker-compose up -d mariadb
sleep 10

docker-compose up -d phpmyadmin

# sleep 30
sudo rm -rf app
./scripts/restore_db.sh
docker-compose up -d strapi

echo "wait strapi up done... "
# yarn.lock exist after strapi is up
wait_file "$server_log" 120 || {
  echo "file missing after waiting for 120 seconds: '$server_log'"
  exit 1
}

./scripts/restore_strapi.sh

echo "done"
