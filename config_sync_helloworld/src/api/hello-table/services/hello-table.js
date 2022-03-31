'use strict';

/**
 * hello-table service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hello-table.hello-table');
