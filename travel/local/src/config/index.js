const dotenv = require('dotenv');
dotenv.config();

const config = {
  port: process.env.PORT,
  db_url: process.env.DB_URL,
  access_key: process.env.ACCESS_KEY,
  refresh_key: process.env.REFRESH_KEY,
  reset_key: process.env.RESET_KEY,
  email: process.env.EMAIL,
  email_pass: process.env.EMAIL_PASS,
  host: process.env.EMAIL_HOST,
  smtp_port: process.env.SMTP_PORT,
  node_env: process.env.NODE_ENV,
  whitelist: process.env.WHITELIST ? process.env.WHITELIST.split(',') : []
}

module.exports = config;