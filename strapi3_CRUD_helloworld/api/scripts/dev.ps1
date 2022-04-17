# netstat -ano | findstr :<PORT>
# taskkill /PID <PID> /F
npx kill-port 1337

yarn --ignore-engines --dev

remove-item -R -Force .cache
remove-item -R -Force .tmp
remove-item -R -Force build
timeout 3

yarn --ignore-engines build
yarn --ignore-engines develop
