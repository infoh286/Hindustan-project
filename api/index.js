const express = require('express');
const path = require('path');
const serverless = require('serverless-http');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = app;
module.exports.handler = serverless(app);
