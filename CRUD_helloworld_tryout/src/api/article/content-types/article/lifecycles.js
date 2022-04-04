module.exports = {
  async afterCreate(event) {
    const { result, params } = event;

    await strapi.service("api::history.history").create({
      data: {
        contentType: "article",
        action: "create",
        content: result,
        author: {},
      },
    });
  },
};
