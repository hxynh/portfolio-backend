const nodemailer = require('nodemailer')
const asyncHandler = require('express-async-handler')


const sendEmail = asyncHandler (async (req, res) => {
    const { name, email, tel, message } = req.body;
  
    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });
  
    // Compose the email message
    const mailOptions = {
      from: email,
      to: 'nancyhou958@gmail.com',
      subject: 'New Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${tel}\nMessage:\n${message}`,
    };
  
    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        res.status(500).send('Internal Server Error'+error.message);
      } else {
        console.log('Email sent: ' + info.response);
        res.status(200).send('Email sent successfully');
      }
    });
  });

  module.exports = { sendEmail }