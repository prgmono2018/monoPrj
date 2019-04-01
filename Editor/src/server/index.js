const express = require('express');
const os = require('os');
const templatesActions=require('./controllers/templates');
var bodyParser = require('body-parser');
var cors = require('cors');
//var bodyParser = require('body-parser');
//var router = require('./routes/routes');
const app = express();
app.use(cors())
app.use(express.static('dist'));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({'extended':'true'}));
app.get('/', (req, res) => {
    res.send('Hello, world!');
  });

app.post('/saveTemplate', templatesActions.saveTemplate);
app.get('/getTempList', templatesActions.getTemplateList);

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
