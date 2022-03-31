# Xcopy /E /I  helloworld restaurant_cms_helloworld

rmdir /s /q strapi_plugin_content_import_export_helloworld
robocopy config_sync_helloworld strapi_plugin_content_import_export_helloworld /MIR /XD "node_modules"
