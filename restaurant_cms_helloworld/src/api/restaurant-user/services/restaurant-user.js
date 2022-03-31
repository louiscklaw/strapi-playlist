'use strict';

/**
 * restaurant-user service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::restaurant-user.restaurant-user');
