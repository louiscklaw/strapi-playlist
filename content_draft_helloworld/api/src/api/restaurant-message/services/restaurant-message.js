'use strict';

/**
 * restaurant-message service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::restaurant-message.restaurant-message');
