module.exports = ({ env }) => ({
  apiToken: {
    salt: env("API_TOKEN_SALT", "someRandomLongString"),
  },
  auth: {
    secret: env("ADMIN_JWT_SECRET", "14ae620feee89a104156c0f4339f9f0b"),
    events: {
      onConnectionSuccess(e) {
        console.log(e.user, e.provider);
      },
      onConnectionError(e) {
        console.error(e.error, e.provider);
      },
    },
    options: { expiresIn: "7d" },
  },
  watchIgnoreFiles: [
    "./scripts", // Folder
    "./scripts/someScript.sh", // File
  ],
  forgotPassword: {
    from: "no-reply@example.com",
    replyTo: "no-reply@example.com",
  },
});
