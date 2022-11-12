module.exports = {
  routes: [
    {
      // Path defined with a URL parameter
      method: "GET",
      path: "/receipt/helloController",
      config: {
        // is a must for middlewares, even set in webui
        auth: false,
        policies: [],
        middlewares: [],
      },
      // controller
      handler: "receipt.helloController",
    },
    {
      // Path defined with a URL parameter
      method: "POST",
      path: "/receipts/transfer-balance",
      config: {
        // is a must for middlewares, even set in webui
        auth: false,
        policies: [],
        middlewares: [],
      },
      // controller
      handler: "receipt.transferBalance",
    },
  ],
};
