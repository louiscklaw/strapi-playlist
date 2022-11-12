module.exports = {
  routes: [
    {
      // Path defined with a URL parameter
      method: "GET",
      path: "/hello_restaurants",
      handler: "restaurant.helloRestaurants",
      config: {
        auth: false,
      },
    },
  ],
};
