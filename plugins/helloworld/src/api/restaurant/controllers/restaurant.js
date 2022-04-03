"use strict";

/**
 *  restaurant controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::restaurant.restaurant",
  ({ strapi }) => ({
    // Method 2: Wrapping a core action (leaves core logic in place)
    async helloRestaurants(ctx) {
      // Calling the default core action
      const { data, meta } = await super.find(ctx);

      // some more custom logic
      meta.date = Date.now();

      return { data, meta };
    },
  })
);
