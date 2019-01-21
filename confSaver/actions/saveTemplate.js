var fs = require('fs');

const AWS = require('aws-sdk');
const BUCKET_NAME = 'prj.releases/lobbyData';
const IAM_USER_KEY = 'AKIAI4SY3RJNRALPQXOA';
const IAM_USER_SECRET = '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';

function uploadToS3(fileName,data) {

 let s3bucket = new AWS.S3({
   accessKeyId: IAM_USER_KEY,
   secretAccessKey: IAM_USER_SECRET,
   Bucket: BUCKET_NAME,
 });
 s3bucket.createBucket(function () {
 
   var params = {
    Bucket: BUCKET_NAME,
    Key: fileName,
    Body: JSON.stringify(data),
   };
   s3bucket.putObject(params, function (err, data) {
    if (err) {
     console.log(err);
    }
    console.log('success');
    console.log(data);
   });
 });
}
/*
module.exports = {
    writeTemplateToJsonFile: function(draft) {
        let data = JSON.stringify(draft);  
        fs.writeFileSync('${draft.lobbyName}.json', data);  
    },
  
   readTemplateToJsonFile: function(templateName) {
         fs.readFile('${templateName}.json', (err, data) => {  
         if (err) throw err;
         let template = JSON.parse(data);
         console.log(template);
    });
    }
  };

*/
exports.writeTemplateToJsonFile = function (req, res) {
    //console.log(">> writeTemplateToJsonFile="+JSON.parse(req.body.data).lobbyName);
    console.log("here"+JSON.parse(req.body.data).lobbyName);
    //storeData(req.body.data,`./data/${JSON.parse(req.body.data).lobbyName}.json`,res);
    uploadToS3(JSON.parse(req.body.data).lobbyName+".json",JSON.parse(req.body.data))
  };

  exports.getDataFromJsonFile = function (req, res) {
    console.log(">> getDataFromJsonFile"+req.query.data);
    let fileName =req.query.data;
    var content = fs.readFileSync(`./data/${fileName}.json`);
    res.send(content);
  };

  const storeData = (data, path,res) => {
    try {
      fs.writeFileSync(path, JSON.stringify(data))
     res.send("saved");
    } catch (err) {
      console.error(err)
      res.send(err);
    }
  }

 