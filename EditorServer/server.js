const express = require('express');
const log = require('./src/custom/logger');
const gameRouter = require('./src/routes/gameRouter');
//const router = require('./route/routes');
const bodyParser = require('body-parser');
var cors = require('cors');
const app = express();
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/MonoPrj", { useNewUrlParser: true });
app.use(cors());
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

//app.use(cors()); //enable cross origin- so I will able to use the gui
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

