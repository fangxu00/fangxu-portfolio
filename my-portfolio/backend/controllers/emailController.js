// backend/controllers/emailController.js
const nodemailer = require('nodemailer');

// Function to handle sending emails
const sendEmail = async (req, res) => {
    console.log("sendEmail");
    const { name, email, message } = req.body;

    // Create a transporter object using SMTP protocol
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'mandyhsugo@gmail.com',
            pass: 'vynu ugbo jzrg izjz', 
        },
    });

    // Set up email options
    let mailOptions = {
        to: 'fangxu00@bu.edu',
        subject: `Message from ${name}`,
        text: `Message from ${email}. \n ${message}`,
    };

    try {
        // Send the email
        await transporter.sendMail(mailOptions);
        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email');
    }
};

module.exports = { sendEmail };
