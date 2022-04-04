console.log({ init: "custom_route.js" });

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/helloworld",
      handler: "article.find",
      config: {
        /**
          The `is-admin` policy found at `./src/api/restaurant/policies/is-admin.js`
          is executed before the `find` action in the `Restaurant.js` controller.
         */
        policies: [
          "is-admin",
          (policyContext, config, { strapi }) => {
            console.log("findme ?");
            return true;
          },
        ],
        auth: false,
      },
    },
  ],
};
