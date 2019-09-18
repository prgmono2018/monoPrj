const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();

app.use(express.static(path.join(__dirname)));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'src','client')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname,'dist', 'index.html'));
});
app.listen(process.env.PORT,()=>console.log("running "+process.env.PORT));

