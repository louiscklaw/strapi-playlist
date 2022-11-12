module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7005b715b2f42a350b7e34779ea8015c'),
  },
});
