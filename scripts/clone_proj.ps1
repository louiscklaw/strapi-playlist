# Xcopy /E /I  helloworld restaurant_cms_helloworld

remove-item -R -Force swagger_tryout 
remove-item -R -Force swagger_helloworld
robocopy helloworld_tryout swagger_helloworld /MIR /XD "node_modules"
