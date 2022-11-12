# sqlite3 D:\_workspace\strapi-playlist\restaurant_cms_helloworld\.tmp\data.db

# sqlite> .output c:/Temp/test.sql
# sqlite> .dump
# sqlite> .exit

sqlite3.exe .tmp\data.db `
  ".output data/dump.sql" `
  ".dump" `
  ".exit"

# .read ./backup.sql
# .exit
