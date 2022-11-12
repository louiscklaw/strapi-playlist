# netstat -ano | findstr :<PORT>
# taskkill /PID <PID> /F
npx kill-port 1337
npx kill-port 1337
npx kill-port 1337

timeout 3

# remove-item -r -force node_modules
# remove-item -r -force .cache
# remove-item -r -force build
# timeout 3

yarn --dev

yarn develop
