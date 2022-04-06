'use strict';

/**
 * shorten-url service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::shorten-url.shorten-url');
