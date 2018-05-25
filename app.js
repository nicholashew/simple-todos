/**
 * Module dependencies.
 */
const express = require('express');
const chalk = require('chalk');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

/**
 * Create Express server.
 */
const app = express();

/**
 * Connect to MongoDB.
 */
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb', function (err, client) {
  if (err) {
    console.error(err);
    console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'));
    process.exit();
  }
  console.log("Database connection ready");
});

/**
 * Express configuration.
 */
app.set('port', process.env.PORT || 8080);
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

const routes = require('./routes/todo');
routes(app);

app.use(function (req, res) {
  res.status(404).send({
    url: req.originalUrl + ' not found'
  })
});

// Start Express server.
app.listen(app.get('port'), function () {
  console.log('%s App is running at http://localhost:%d in %s mode', chalk.green('✓'), app.get('port'), app.get('env'));
  console.log('  Press CTRL-C to stop\n');
});