# netstat -ano | findstr :<PORT>
# taskkill /PID <PID> /F
npx kill-port 3000

yarn --dev

yarn build

yarn start
