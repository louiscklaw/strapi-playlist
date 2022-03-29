module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '86a2194f257b2e7d778eb83bb0100165'),
  },
});
