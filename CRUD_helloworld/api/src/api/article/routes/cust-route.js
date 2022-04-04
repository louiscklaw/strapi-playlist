module.exports = {
  routes: [
    {
      // Path defined with a URL parameter
      method: "GET",
      path: "/article/helloroute",
      config: {
        // is a must for middlewares, even set in webui
        auth: false,

        policies: [
          (policyContext, config, { strapi }) => {
            console.log("policies");
            return true;
          },
        ],

        middlewares: [
          (ctx, next) => {
            console.log("middleware");
            return next();
          },
        ],
      },
      // controller
      handler: "article.helloController",
    },
  ],
};
