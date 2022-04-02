"use strict";

/**
 * restaurant service.
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService(
  "api::restaurant.restaurant",
  ({ strapi }) => ({
    // Method 1: Creating an entirely custom service
    async find(...args) {
      // Calling the default core controller
      const { results, pagination } = await super.find(...args);

      // some custom logic
      results.forEach((result) => {
        result.counter = 1;
      });

      return { results, pagination };
    },
  })
);
