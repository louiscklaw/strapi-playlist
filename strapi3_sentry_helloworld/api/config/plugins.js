module.exports = ({ env }) => ({
  email: {
    provider: "mailtrap",
    providerOptions: {
      user: env("MAILTRAP_USER", "default_user"),
      password: env("MAILTRAP_PASSWORD", "default_pass"),
    },
    settings: {
      defaultFrom: env("MAILTRAP_DEFAULT_FROM", "default@value.com"),
      defaultReplyTo: env("MAILTRAP_DEFAULT_REPLY_TO", "default@value.com"),
    },
  },
  sentry: {
    enabled: true,
    config: {
      dsn: env("SENTRY_DSN"),
    },
  },
});
