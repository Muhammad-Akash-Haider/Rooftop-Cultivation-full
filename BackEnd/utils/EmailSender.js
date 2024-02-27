const nodemailer = require('nodemailer');

// Create a transporter using Gmail SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'majidali37406@gmail.com',
    pass: 'fjtr fugc uagv tbnf'
  }
});

exports.sendEmail = async (recipientEmail, subject, text) => {
  try {
    // Define email options
    const mailOptions = {
      from: 'info@rooftop.com',
      to: recipientEmail,
      subject: subject,
      text: text
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error; // Throw error to handle it in the calling function
  }
};
