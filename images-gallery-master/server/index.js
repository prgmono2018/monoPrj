var formidable = require('formidable');
const express = require('express');
const path = require('path');
const fs = require('fs');
var cors = require('cors');
const bodyParser = require('body-parser');
const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();

app.use(bodyParser({limit: '50mb'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));

app.use(cors()); //enable cross origin- so I will able to use the gui
app.use('/', router);
const loc=path.join(__dirname, '..', 'data');
app.use(express.static('public'));
//console.log(loc);
//Serves all the request which includes /images in the url from Images folder
app.use(express.static(loc));
//app.use(express.static(loc));
// this is our MongoDB database

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format



// this is our get method
// this method fetches all available data in our database
router.get('/getData', (req, res) => {
    console.log("getdata")
});

// this is our update method
// this method overwrites existing data in our database
router.post('/saveJson', (req, res) => {
  
  
  console.log('save');
  var form = new formidable.IncomingForm();

  form.parse(req, function (err, fields, files) {
    const jsonFile=fields.file;

    fs.writeFileSync(loc, jsonFile , 'utf-8'); 
});

 

 // res.sendFile(__dirname + '/index.html');
});


router.get('/listFiles', (req, res) => {
  console.log("listfiles");
  const loc=path.join(__dirname, '..', 'data');
  fs.readdir(loc, (err, files) => {
    res.contentType('application/json');
    return res.send(files);
  });

});

router.post('/switchFile', (req, res) => {
  
  let fileName="";
  let file="";
  let  newName="";
  console.log('switchFile');
  var form = new formidable.IncomingForm();
  form.on('fileBegin', function(name, file,fields) {
    file.path = loc + "\\" + file.name;
    fileName=file.name;
  })
  form.parse(req, function (err, fields, files) {
     file=files.file;
     newName=fields.delete;
     fs.rename(loc + "\\" + fileName, loc + "\\" + newName, function(err) {
      if ( err ) console.log('ERROR: ' + err);
    });
});
form.on('file', function(field, file) {
  console.log("I am in file.");
  //rename the incoming file to the file's name
  //fs.rename(file.path, form.uploadDir + "/" + file.name);
})

return res.json({ success: true });


});
// this is our delete method
// this method removes existing data in our database
router.delete('/deleteData', (req, res) => {
  const { id } = req.body;
  Data.findByIdAndRemove(id, (err) => {
    if (err) return res.send(err);
    return res.json({ success: true });
  });
});

// this is our create methid
// this method adds new data in our database
router.post('/putData', (req, res) => {

});

// append /api for our http requests
app.use('/api', router);

// launch our backend into a port
module.exports = app;