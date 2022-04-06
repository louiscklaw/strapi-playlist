mkdir data

sqlite3.exe .tmp\data.db `
  ".output data/dump.sql" `
  ".dump" `
  ".exit"
