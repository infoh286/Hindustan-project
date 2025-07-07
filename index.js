const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');
const serverless = require('serverless-http');
require('dotenv').config();

const app = express();

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views')); // adjust path if needed

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

app.post('/submit-form', async (req, res) => {
  const { name, email, mobile, state, category, message } = req.body;

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "info.hcl00@gmail.com",
      pass: "fnby jnvy vgoh acxf"
    }
  });

  const mailOptions = {
    from: email,
    to: "info.hcl00@gmail.com",
    subject: 'Cricket Tournament Registration - New Submission',
    text: `
      New Cricket Tournament Registration Details:
      
      Name     : ${name}
      Email    : ${email}
      Mobile   : ${mobile}
      State    : ${state}
      Category : ${category}
      Message  : ${message}
      
      Submitted on: ${new Date().toLocaleString()}
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.render('index', { success: true });
  } catch (err) {
    console.error('Error sending email:', err);
    res.render('index', { success: false });
  }
});

// Export serverless handler
module.exports = serverless(app);
