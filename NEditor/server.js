const express = require('express');
const path = require('path');
const log = require('./src/server/custom/logger');
const gameRouter = require('./src/server/routes/gameRouter');
const bodyParser = require('body-parser');
var cors = require('cors');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
mongoose.Promise = global.Promise;
log.debug("port"+process.env.PORT)
mongoose.connect(`${process.env.MONGODB_HOST}/${process.env.MONGODB_SCHEMA}`, { useNewUrlParser: true });
app.use(cors());
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(express.static(path.join(__dirname)));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'src','client')));
app.use(gameRouter);
app.get('/', function(req, res) {
  return res.sendFile(path.join(__dirname,'dist', 'index.html'));
});

// Route not found (404)
app.use(function(req, res, next) {
  log.error("404")
  return res.status(404).send({ message: 'Route'+req.url+' Not found.', "txt": 'Route'+req.url+' Not found. Error 404' });
});

// Any error
app.use(function(err, req, res, next) {
  return res.status(500).send({ error: err,message: 'Server error occured', "txt": 'Server error occured'  });
});
app.listen(process.env.PORT,()=>log.info("running "+process.env.PORT));

