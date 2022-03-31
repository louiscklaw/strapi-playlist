Remove-Item -R -Force .tmp\data.db

sqlite3.exe .tmp\data.db `
  ".read _backup/backup.sql" `
  ".exit"
