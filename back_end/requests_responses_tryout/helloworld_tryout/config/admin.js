module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '14ae620feee89a104156c0f4339f9f0b'),
  },
});
