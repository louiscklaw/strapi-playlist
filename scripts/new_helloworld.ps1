remove-item -R -Force database-transactions-tryout

pushd CRUD_helloworld
  remove-item -R -Force node_modules
popd

robocopy CRUD_helloworld database-transactions-tryout /E