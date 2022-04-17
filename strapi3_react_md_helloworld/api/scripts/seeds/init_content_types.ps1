# Remove-Item -R -Force D:\_workspace\strapi-playlist\strapi3-helloworld-tryout\api\member

timeout 1

yarn --ignore-engines strapi generate:api member `
  name:string `
  email:email `
  address:json `
  phone:string `
  website:string `
  company:json `
  notes:text `
  balance:float

yarn --ignore-engines strapi generate:api article `
  title:string

yarn --ignore-engines strapi generate:api category `
  name:string

yarn --ignore-engines strapi generate:api history `
  message:text `
  raw_json:json `
  raw_result:json `
  raw_params:json

yarn --ignore-engines strapi generate:api restaurant `
  name:string `
  description:text `
  raw_result:json `
  raw_params:json

yarn --ignore-engines strapi generate:api store `
  title:string

yarn --ignore-engines strapi generate:api test-content1 `
  title:string

# timeout 15

# node scripts/rest_seed.mjs
