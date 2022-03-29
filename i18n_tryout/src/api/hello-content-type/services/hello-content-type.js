'use strict';

/**
 * hello-content-type service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hello-content-type.hello-content-type');
