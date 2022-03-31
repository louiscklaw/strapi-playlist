module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '61891fe3b3240e3036239f1fb3d6a476'),
  },
});
