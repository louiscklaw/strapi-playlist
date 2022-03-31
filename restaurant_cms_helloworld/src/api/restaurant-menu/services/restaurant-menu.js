'use strict';

/**
 * restaurant-menu service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::restaurant-menu.restaurant-menu');
