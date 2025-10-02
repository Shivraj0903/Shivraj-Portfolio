const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;
  
  const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-app-password'
    }
  });
  
 
  const mailOptions = {
    from: email,
    to: 'shivrajkondekar123@gmail.com', 
    subject: `New message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };
  

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ success: false, error: error.toString() });
    }
    res.json({ success: true, message: 'Email sent successfully' });
  });
});

app.listen(3000, () => console.log('Server running on port 3000'));