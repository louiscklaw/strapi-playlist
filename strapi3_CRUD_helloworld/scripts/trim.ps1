pushd api
  Remove-item -R -Force node_modules
popd

pushd client
  Remove-item -R -Force node_modules
popd