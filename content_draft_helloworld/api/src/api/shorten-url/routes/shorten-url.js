'use strict';

/**
 * shorten-url router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::shorten-url.shorten-url');
