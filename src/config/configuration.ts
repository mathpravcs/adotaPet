import * as process from 'process';

export const configuration = () => ({
  port: +process.env.APP_PORT,
  jwt: {
    accessSecret: process.env.ACCESS_JWT_SECRET,
    accessExpiresIn: process.env.ACCESS_JWT_EXPIRES_IN,
    refreshSecret: process.env.REFRESH_JWT_SECRET,
    refreshExpiresIn: process.env.REFRESH_JWT_EXPIRES_IN,
    mailSecret: process.env.MAIL_JWT_SECRET,
    mailExpiresIn: process.env.MAIL_JWT_EXPIRES_IN,
  },
  database: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    name: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  },
  smtp: {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  here: {
    apiKey: process.env.HERE_API_KEY,
  },
});
