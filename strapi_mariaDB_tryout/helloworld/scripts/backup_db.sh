docker-compose exec mariadb \
  mysqldump \
  -uroot -pstrapi \
  --all-databases > dump-$(date +%F_%H-%M-%S).sql
