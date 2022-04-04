"use strict";

console.log({ init: "is-admin" });

module.exports = (policyContext, config, { strapi }) => {
  console.log({ hello: "world" });

  return false;
};
