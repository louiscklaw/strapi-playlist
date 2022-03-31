'use strict';

/**
 * hello-table router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::hello-table.hello-table');
