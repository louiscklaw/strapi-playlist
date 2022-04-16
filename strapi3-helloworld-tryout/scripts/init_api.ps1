# npx strapi generate:api product name:string description:text price:integer
# npx strapi generate:api restaurant name:string description:text
# npx strapi generate:api category name:string description:text

# dont enable this, helper error
# yarn add --ignore-engines strapi-plugin-documentation

yarn add --ignore-engines strapi-plugin-sentry
yarn add --ignore-engines strapi-plugin-graphql

yarn add --ignore-engines strapi-plugin-wysiwsg-react-md-editor
yarn add --ignore-engines strapi-plugin-sitemap

yarn --ignore-engines strapi admin:reset-user-password --email=helloworld@gmail.com --password=Aa1234567
