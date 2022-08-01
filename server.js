/**
 * server
 * @module server
 */

const express = require('express');
const BodyParser = require('body-parser');
const logger = require('morgan');
const path = require('path')
const app = express();

require("dotenv").config();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');

  // authorized headers for preflight requests
  // https://developer.mozilla.org/en-US/docs/Glossary/preflight_request
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();

  app.options('*', (req, res) => {
    // allowed XHR methods  
    res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
    res.send();
  });
});

// parse application/json
app.use(BodyParser.json({ limit: '50mb' }))
// parse application/x-www-form-urlencoded
app.use(
  BodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 })
);

app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'public')));


var emailing = require('./server/routes/emailing')


app.use('/api/emailing', emailing);


if (process.env.NODE_ENV == 'production') {
  app.use(express.static(path.join(__dirname, './client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,'./client/build', 'index.html'));
  });
}

const port = process.env.PORT || 3001
console.log('process.env.PORT', process.env.PORT, process.env.NODE_ENV)
const server = app.listen( port, function() {
  console.log(`🚀  API listening at port ${process.env.PORT || 3001}`);  });
