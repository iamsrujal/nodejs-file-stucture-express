const nodemailer = require("nodemailer");
const config = require('config').get(mode);

let sendMail = (to, subject, html) => {
  return new Promise((resolve, reject) => {
    let transporter = nodemailer.createTransport({
      host: config.email.host,
      port: config.email.port,
      secure: true, // true for 465, false for other ports
      auth: {
        user: config.email.username,
        pass: config.email.password
      }
    });

    let mailOptions = {
      from: config.email.username,
      to: to,
      subject: subject,
      html: html,
    }

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject("There is error in mail:- " + error);
      } else {
        console.log("Mail has been sent to", to)
        resolve("Mail Sent!!!");
      }
    });
  })
};

module.exports = {
  sendMail
}
