docker-compose exec mariadb \
  mysqldump \
  -uroot -pstrapi \
  --all-databases > _backup/dump.sql


