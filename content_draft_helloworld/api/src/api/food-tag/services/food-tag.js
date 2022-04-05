'use strict';

/**
 * food-tag service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::food-tag.food-tag');
