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
console.log("port"+process.env.PORT)
mongoose.connect(`${process.env.MONGODB_HOST}/${process.env.MONGODB_SCHEMA}`, { useNewUrlParser: true });
app.use(cors());
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(express.static(path.join(__dirname)));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'src','client')));
app.use('/', gameRouter);
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname,'dist', 'index.html'));
});
app.listen(process.env.PORT,()=>console.log("running "+process.env.PORT));

