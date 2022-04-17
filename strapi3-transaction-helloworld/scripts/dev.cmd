pushd api 
  start /B "powershell scripts/dev.ps1"
popd

pushd client
  start /B "powershell scripts/dev.ps1"
popd
