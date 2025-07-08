// api/index.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const serverless = require('serverless-http');
const nodemailer = require('nodemailer');

require('dotenv').config();

const app = express();

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..', 'views'));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '..', 'public')));

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
      res.redirect('https://hindustan-project.vercel.app/');
    } catch (err) {
      console.error('Error sending email:', err);
      res.redirect('https://hindustan-project.vercel.app/');

    }
  });

module.exports.handler = serverless(app);
module.exports = app;

// const express = require('express');
// const bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');
// const path = require('path');
// require('dotenv').config();

// const app = express();
// const PORT = process.env.PORT || 3000;

// // View engine setup
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

// // Middleware
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

// // Routes
// app.get('/', (req, res) => {
//   res.render('index');
// });

// app.post('/submit-form', async (req, res) => {
//   const { name, email, mobile, state, category, message } = req.body;

//   let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: "info.hcl00@gmail.com",
//       pass: "fnby jnvy vgoh acxf"
//     }
//   });

//   const mailOptions = {
//     from: email,
//     to: "info.hcl00@gmail.com",
//     subject: 'Cricket Tournament Registration - New Submission',
//     text: `
//   New Cricket Tournament Registration Details:
  
//   Name     : ${name}
//   Email    : ${email}
//   Mobile   : ${mobile}
//   State    : ${state}
//   Category : ${category}
//   Message  : ${message}
  
//   Submitted on: ${new Date().toLocaleString()}
//     `
//   };


//   try {
//     await transporter.sendMail(mailOptions);
//     res.render('index', { success: true });
//   } catch (err) {
//     console.error('Error sending email:', err);
//     res.render('index', { success: false });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running at http://localhost:${PORT}`);
// });


