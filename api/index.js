// api/index.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const serverless = require('serverless-http');
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

module.exports.handler = serverless(app);
