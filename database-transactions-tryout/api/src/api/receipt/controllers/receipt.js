"use strict";
const { sanitizeEntity } = require("strapi-utils");

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::receipt.receipt", ({ strapi }) => ({
  helloController: async (ctx, next) => {
    strapi.service("api::article.article").helloService();
    console.log("controllers");

    try {
      ctx.body = JSON.stringify(ctx, null, 2);
    } catch (err) {
      ctx.body = err;
    }
  },
  transferBalance: async (ctx) => {
    console.log("helloworld");
    const { amount, from, to } = ctx.request.body;

    const fromUser = await strapi.entityService.findOne(
      "plugin::users-permissions.user",
      from
    );

    const toUser = await strapi.entityService.findOne(
      "plugin::users-permissions.user",
      to
    );

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

    // Record the transaction
    // const receipt = await strapi.db.query("receipt").create({
    //   data: {
    //     sender: fromUser.id,
    //     recipient: toUser.id,
    //     amount,
    //   },
    // });

    const entry = strapi.entityService.create("api::receipt.receipt", {
      data: {
        sender: fromUser.id,
        recipient: toUser.id,
        amount,
      },
    });

    // await strapi.db.query("api::receipt.receipt").update({
    //   where: { id: from },
    //   data: { ...fromUser },
    // });

    console.log({ fromUser, toUser });
    await strapi.entityService.update(
      "plugin::users-permissions.user",
      fromUser.id,
      {
        data: fromUser,
      }
    );

    await strapi.entityService.update(
      "plugin::users-permissions.user",
      toUser.id,
      {
        data: toUser,
      }
    );

    return "helloworld";
  },
}));
