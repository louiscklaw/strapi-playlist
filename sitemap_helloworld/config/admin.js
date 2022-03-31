module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'bef62897ebd3e29983cccce409707742'),
  },
});
