# netstat -ano | findstr :<PORT>
# taskkill /PID <PID> /F
npx kill-port 1337

yarn --dev

yarn seed
yarn develop
