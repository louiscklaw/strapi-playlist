'use strict';

/**
 * hello-content-type router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::hello-content-type.hello-content-type');
