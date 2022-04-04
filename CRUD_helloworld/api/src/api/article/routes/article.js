"use strict";

/**
 * article router.
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

// module.exports = createCoreRouter('api::article.article');
module.exports = createCoreRouter("api::article.article", {
  config: {
    create: {
      policies: [
        (policyContext, config, { strapi }) => {
          console.log("create policies");
          // console.log(config);
          // console.log(policyContext.request.body._state);
          // console.log(policyContext.state.user);
          policyContext.request.body._state = policyContext.state;
          return true;
        },
      ],

      middlewares: [
        async (ctx, next) => {
          console.log("create middleware");
          console.log(ctx.request.body._state);
          await strapi.service("api::history.history").create({
            data: {
              message: "article create",
              raw_params: ctx.request.body,
            },
          });
          return next();
        },
      ],
    },
  },
});
