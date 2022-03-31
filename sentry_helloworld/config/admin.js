module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0d7ca30981da36b90c7d1f5d3bbc826a'),
  },
});
