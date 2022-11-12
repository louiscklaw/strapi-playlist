const { createCoreService } = require("@strapi/strapi").factories;

console.log("service init");

module.exports = createCoreService("api::article.article", ({ strapi }) => ({
  async helloService() {
    console.log("helloService");

    return false;
  },
}));
