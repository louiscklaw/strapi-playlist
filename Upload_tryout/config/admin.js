module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '45fb2fbfc02a71f67e2e204905ac8139'),
  },
});
