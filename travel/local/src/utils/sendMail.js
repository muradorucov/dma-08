const nodemailer = require("nodemailer");
const config = require("../config");


const sendMailUtil = async (to, message) => {
  const transporter = nodemailer.createTransport({
    host: config.host,
    port: config.smtp_port,
    secure: true, // use TLS
    auth: {
      user: config.email,
      pass: config.email_pass,
    },
  });


  await transporter.sendMail({
    from: `TEST TEAM <${config.email}>`,
    to: `TEST USER <${to}>`,
    subject: "PASSWORD YENILEME TELEBI",
    html: message,
  })
}

module.exports = sendMailUtil;