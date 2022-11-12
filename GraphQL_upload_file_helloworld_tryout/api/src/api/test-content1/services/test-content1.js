"use strict";

/**
 * test-content1 service.
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService(
  "api::test-content1.test-content1",
  ({ strapi }) => ({

  })
);
