const express = require('express');
const log = require('./src/custom/logger');
const gameRouter = require('./src/routes/gameRouter');
const bodyParser = require('body-parser');
var cors = require('cors');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
mongoose.Promise = global.Promise;
console.log("port"+process.env.PORT)
mongoose.connect(`${process.env.MONGODB_HOST}/${process.env.MONGODB_SCHEMA}`, { useNewUrlParser: true });
app.use(cors());
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use('/', gameRouter);



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  log.debug("srr");
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;

