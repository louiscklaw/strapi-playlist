'use strict';

/**
 *  hello-table controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::hello-table.hello-table');
