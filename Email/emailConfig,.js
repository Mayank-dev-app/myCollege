const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.Email_ID ,
        pass: process.env.App_PASS
    }
});

module.exports = transporter;