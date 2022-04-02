docker-compose exec mariadb \
  mysqldump \
  -uroot -pstrapi \
  --all-databases > _backup/dump-$(date +%F_%H-%M-%S).sql
