# npx strapi generate:api product name:string description:text price:integer
# npx strapi generate:api restaurant name:string description:text
# npx strapi generate:api category name:string description:text

# dont enable this, helper error
yarn add --ignore-engines strapi-plugin-documentation
yarn add --ignore-engines strapi-plugin-graphql

yarn add --ignore-engines slugify
yarn add --ignore-engines --dev @faker-js/faker
