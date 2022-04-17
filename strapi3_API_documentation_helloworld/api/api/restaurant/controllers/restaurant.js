"use strict";
const _ = require("lodash");
const fs = require("fs");

const email_template = fs.readFileSync(
  "./api/restaurant/controllers/email_template.html",
  "utf8"
);
const html_template = `<h1>Welcome on mywebsite.fr!</h1>
<p>Your account is now linked with: <%= user.email %>.<p>`;

module.exports = {
  async testEmail(ctx) {
    const user = {
      to: "paulbocuse@strapi.io",
      from: "joelrobuchon@strapi.io",
      cc: "helenedarroze@strapi.io",
      bcc: "ghislainearabian@strapi.io",
      replyTo: "annesophiepic@strapi.io",
      subject: "Use strapi email provider successfully",
      text: "Hello world!",
      html: "Hello world!",
      firstname: "louis",
      lastname: "law",
    };

    const emailTemplate = {
      subject: "Welcome <%= user.firstname %>",
      text: `Welcome on mywebsite.fr!
        Your account is now linked with: <%= user.email %>.`,
      html: email_template,
    };

    await strapi.plugins.email.services.email.sendTemplatedEmail(
      {
        to: "123@123.com",
        // from: is not specified, so it's the defaultFrom that will be used instead
      },
      emailTemplate,
      {
        user: _.pick(user, ["username", "email", "firstname", "lastname"]),
      }
    );

    return "Hello World! testEmail";
  },
};
