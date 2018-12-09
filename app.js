const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

// Set up the express app
const app = express();

const db = require("./server/models");
//db.sequelize.sync(data=>console.log("sync return",data)); //todo

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./server/routes')(app);
// Setup a default catch-all route
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of UCD challenge',
}));

module.exports = app;