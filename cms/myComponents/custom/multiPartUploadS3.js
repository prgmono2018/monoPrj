var path = require('path');
var async = require('async');
//var fs = require('fs');
var AWS = require('aws-sdk'); 
const fileToArrayBuffer = require('file-to-array-buffer')
const BUCKET_NAME = 'prj.releases';
const IAM_USER_KEY = 'AKIAI4SY3RJNRALPQXOA';
const IAM_USER_SECRET = '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'; 
//AWS.config.loadFromPath('./aws.json');

AWS.config.region="eu-central-1";
  let s3 = new AWS.S3({
    accessKeyId: IAM_USER_KEY,
    secretAccessKey: IAM_USER_SECRET,
    Bucket: BUCKET_NAME,
  });
var bucketName = BUCKET_NAME;

export default function(file, fileName, uploadCb) {
  s3.createMultipartUpload({ Bucket: bucketName, Key: fileName }, (mpErr, multipart) => {
    if(!mpErr){
      //console.log("multipart created", multipart.UploadId);
      fileToArrayBuffer(file).then((fileData) =>  {

        var partSize = 1024 * 1024 * 5;
        var parts = Math.ceil(fileData.length / partSize);

        async.timesSeries(parts, (partNum, next) => {

          var rangeStart = partNum*partSize;
          var end = Math.min(rangeStart + partSize, fileData.length);

          console.log("uploading ", fileName, " % ", (partNum/parts).toFixed(2));

          partNum++;  
          async.retry((retryCb) => {
            s3.uploadPart({
              Body: fileData.slice(rangeStart, end),
              Bucket: bucketName,
              Key: fileName,
              PartNumber: partNum,
              UploadId: multipart.UploadId
            }, (err, mData) => {
              retryCb(err, mData);
            });
          }, (err, data)  => {
            //console.log(data);
            next(err, {ETag: data.ETag, PartNumber: partNum});
          });

        }, (err, dataPacks) => {
          s3.completeMultipartUpload({
            Bucket: bucketName,
            Key: fileName,
            MultipartUpload: {
              Parts: dataPacks
            },
            UploadId: multipart.UploadId
          }, uploadCb);
        });
      });
    }else{
      uploadCb(mpErr);
    }
  });
}

function uploadFile(absoluteFilePath, uploadCb) {
  var fileName = path.basename(absoluteFilePath);
  var stats = fs.statSync(absoluteFilePath)
  var fileSizeInBytes = stats["size"]

  if(fileSizeInBytes < (1024*1024*5)) {
    async.retry((retryCb) => {
      fs.readFile(absoluteFilePath, (err, fileData) => {
        s3.putObject({
          Bucket: bucketName, 
          Key: fileName, 
          Body: fileData
        }, retryCb);        
      });
    }, uploadCb);
  }else{
    uploadMultipart(absoluteFilePath, fileName, uploadCb)
  }
}