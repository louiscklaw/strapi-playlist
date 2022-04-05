Remove-Item -R -Force .tmp\data.db

sqlite3.exe .tmp\data.db `
  ".read data/dump.sql" `
  ".exit"
