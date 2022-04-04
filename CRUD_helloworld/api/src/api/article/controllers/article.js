const { createCoreController } = require("@strapi/strapi").factories;

// module.exports = createCoreController('api::article.article');
module.exports = createCoreController("api::article.article", ({ strapi }) => ({
  helloController: async (ctx, next) => {
    strapi.service("api::article.article").helloService();
    console.log("controllers");

    try {
      ctx.body = JSON.stringify(ctx, null, 2);
    } catch (err) {
      ctx.body = err;
    }
  },
}));
