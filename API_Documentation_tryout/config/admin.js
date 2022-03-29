module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4fab3e95d077446895165ae77a637750'),
  },
});
