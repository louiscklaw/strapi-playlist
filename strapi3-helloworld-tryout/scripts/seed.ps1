Remove-Item -R -Force D:\_workspace\strapi-playlist\strapi3-helloworld-tryout\api\member

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

# timeout 15

# node scripts/rest_seed.mjs
