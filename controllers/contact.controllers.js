// JS

import nodemailer from "nodemailer";

import config from '../config/index.js';

const transporter = nodemailer.createTransport({
  host: config.MAIL_HOST,
  port: config.MAIL_PORT,
  auth: {
    user: config.MAIL_USERNAME,
    pass: config.MAIL_PASSWORD,
  },
});

class ContactController {
  constructor(request, response) {
    this.request = request;
    this.response = response;
  }

  sendContactForm() {

  const { name, email, subject, message, mailCopy } = this.request.body;

  const mailOptions = {
    to: [config.MAIL_TO], // Enter here the email address on which you want to send emails from your
    customers,
    from: name,
    subject,
    text: message,
  };

  if (mailCopy) {
    mailOptions.to.push(email);
  }

  transporter
    .sendMail(mailOptions)
    .then(() => {
      return this.response
      .status(200)
      .json({ msg: "Email sent successfully" });
    })
    .catch((error) => {
      return this.response
      .status(400)
      .json({ errors: [{ msg: `Something went wrong: ${error}` }] });
      });
  }
}

export default ContactController;