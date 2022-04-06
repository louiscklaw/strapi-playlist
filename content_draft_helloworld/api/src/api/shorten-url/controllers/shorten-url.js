'use strict';

/**
 *  shorten-url controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::shorten-url.shorten-url');
