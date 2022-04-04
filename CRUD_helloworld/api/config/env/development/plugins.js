module.exports = ({ env }) => ({
  email: {
    provider: "nodemailer",
    providerOptions: {
      host: env("SMTP_HOST", "smtp.mailtrap.io"),
      port: env("SMTP_PORT", 2525),
      auth: {
        user: env("SMTP_USERNAME"),
        pass: env("SMTP_PASSWORD"),
      },
    },
    settings: {
      defaultFrom: "hello@example.com",
      defaultReplyTo: "hello@example.com",
    },
  },
});
