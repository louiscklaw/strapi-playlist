const { createCoreController } = require("@strapi/strapi").factories;

// module.exports = createCoreController('api::article.article');
module.exports = createCoreController("api::article.article", ({ strapi }) => ({
  helloController: async (ctx, next) => {
    console.log("controllers");
    strapi.service("api::article.article").helloService();

    try {
      ctx.body = JSON.stringify(ctx, null, 2);
    } catch (err) {
      ctx.body = err;
    }
  },
}));
