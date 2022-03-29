'use strict';

/**
 *  hello-content-type controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::hello-content-type.hello-content-type');
