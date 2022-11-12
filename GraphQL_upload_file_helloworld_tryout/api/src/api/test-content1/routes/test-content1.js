"use strict";

/**
 * test-content1 router.
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::test-content1.test-content1", {
  config: {
    find: {
      auth: false,
      policies: [],
      middlewares: [
        (ctx, next) => {
          console.log("test-content");
          return next();
        },
      ],
    },
  },
});
