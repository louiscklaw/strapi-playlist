"use strict";
const { sanitizeEntity } = require("strapi-utils");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async transferBalance(ctx) {
    // Read from POST body
    const { amount, from, to } = ctx.request.body;
    // console.log({ amount, from, to });

    return await strapi.connections.default.transaction(async (transacting) => {
      // Find the user
      const fromUser = await strapi
        .query("user", "users-permissions")
        .findOne({ id: from }, null, { transacting });
      const toUser = await strapi
        .query("user", "users-permissions")
        .findOne({ id: to }, null, { transacting });

      // Check if the user exists
      if (!fromUser || !toUser) {
        return ctx.badRequest(null, "User not found");
      }
      // Check if the user has enough balance
      if (fromUser.balance < amount) {
        return ctx.badRequest(null, "Insufficient balance");
      }

      // Update the user balance
      fromUser.balance -= amount;
      toUser.balance += amount;

      // console.log({ fromUser, toUser });

      // Record the transaction
      const receipt = await strapi.query("receipt").create(
        {
          sender: fromUser.id,
          recipient: toUser.id,
          amount,
        },
        { transacting }
      );

      // Save the user
      await strapi
        .query("user", "users-permissions")
        .update({ id: from }, fromUser, { transacting });
      await strapi
        .query("user", "users-permissions")
        .update({ id: to }, toUser, { transacting });

      // respond with the receipt (don't forget to sanitize our output!)
      return sanitizeEntity(receipt, { model: strapi.models.receipt });
    });
  },
};
