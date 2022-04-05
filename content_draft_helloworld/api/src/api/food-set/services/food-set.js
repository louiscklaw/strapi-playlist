'use strict';

/**
 * food-set service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::food-set.food-set');
