module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8f4a54948cc9543e222c06707eaf007a'),
  },
});
