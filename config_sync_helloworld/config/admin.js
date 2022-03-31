module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "312e8318f78481ceed32ee331290ef06"),
  },
  watchIgnoreFiles: ["**/config/sync/**"],
});
