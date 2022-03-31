# netstat -ano | findstr :<PORT>
# taskkill /PID <PID> /F
npx kill-port 1337

Remove-item -Recurse -Force '.\.cache'
Remove-item -Recurse -Force '.\build'

yarn develop
