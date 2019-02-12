var fs = require('fs');
//import request from 'request'
//const request = require('request')


//const s3 = new AWS.S3()
const AWS = require('aws-sdk/dist/aws-sdk-react-native');
const BUCKET_NAME = 'prj.releases/lobbyData';
const IAM_USER_KEY = 'AKIAI4SY3RJNRALPQXOA';
const IAM_USER_SECRET = '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';

//export default function uploadToS3(file,fileName) {
  exports.uploadToS3 = function (file,fileName) {
    console.log('>>>>>>>pupload');
 let s3bucket = new AWS.S3({
   accessKeyId: IAM_USER_KEY,
   secretAccessKey: IAM_USER_SECRET,
   Bucket: BUCKET_NAME,
 });
 s3bucket.createBucket(function () {
  console.log('create');
   var params = {
    Bucket: BUCKET_NAME,
    Key: fileName,
    Body: file,
   };
   s3bucket.putObject(params, function (err, data) {
    console.log('put bucket');
    if (err) {
     console.log(err);
    }
    console.log('success');
    console.log(data);
   });
 });
}

/*exports.downloadFromUploadCareCdn= function (uri,fileName) {
  var options = {
    uri: uri,
    encoding: null
};
//const request = require('request')
request(options, function(error, response, body) {
    if (error || response.statusCode !== 200) { 
        console.log("failed to get image");
        console.log(error);
    } else {
        s3.putObject({
            Body: body,
            Key: fileName,
            Bucket: BUCKET_NAME,
        }, function(error, data) { 
            if (error) {
                console.log("error downloading image to s3");
            } else {
                console.log("success uploading to s3");
            }
        }); 
    }   
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
    console.log("here"+JSON.parse(req.body.data).applicationName);
    //storeData(req.body.data,`./data/${JSON.parse(req.body.data).lobbyName}.json`,res);
    uploadToS3(JSON.parse(req.body.data).applicationName+".json",JSON.parse(req.body.data))
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

 