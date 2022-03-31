'use strict';

/**
 * restaurant-food service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::restaurant-food.restaurant-food');
