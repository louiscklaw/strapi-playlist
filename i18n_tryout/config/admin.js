module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'bd9ce9ce576cec78f4c50061848fc577'),
  },
});
