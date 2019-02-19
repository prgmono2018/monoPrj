// Based on Glacier's example: http://docs.aws.amazon.com/AWSJavaScriptSDK/guide/examples.html#Amazon_Glacier__Multi-part_Upload

var AWS = require('aws-sdk');
var fileKey = "fileName";
var finalRes="";
var partNum=0;

var bucket =BUCKET_NAME;
AWS.config.region="eu-central-1";
const BUCKET_NAME = 'prj.releases';
const IAM_USER_KEY = 'AKIAI4SY3RJNRALPQXOA';
const IAM_USER_SECRET = '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'; 
const s3 = new AWS.S3({
    region: 'eu-central-1',
    accessKeyId: IAM_USER_KEY,
    secretAccessKey: IAM_USER_SECRET,
    Bucket: BUCKET_NAME,
  });
  var numPartsLeft=0;
  var fileKey="";
// Upload
var startTime = new Date();
var partSize = 1024 * 1024 * 5; // Minimum 5MB per chunk (except the last part) http://docs.aws.amazon.com/AmazonS3/latest/API/mpUploadComplete.html

var maxUploadTries = 3;

var multipartMap = {
    Parts: []
};

function completeMultipartUpload(s3, doneParams,callback) {
  s3.completeMultipartUpload(doneParams, function(err, data) {
    if (err) {
      console.log("An error occurred while completing the multipart upload");
      console.log(err);
    } else {
      var delta = (new Date() - startTime) / 1000;
      console.log('Completed upload in', delta, 'seconds');
      //console.log('Final upload data:', data);
      callback(data);
    }
  });
}

function uploadPart(s3, multipart, partParams, tryNum,callback) {
   
  var tryNum = tryNum || 1;
  s3.uploadPart(partParams,function(multiErr, mData) {
    if (multiErr){
      console.log('multiErr, upload part error:', multiErr);
      if (tryNum < maxUploadTries) {
        console.log('Retrying upload of part: #', partParams.PartNumber)
        uploadPart(s3, multipart, partParams, tryNum + 1,callback);
      } else {
        console.log('Failed uploading part: #', partParams.PartNumber)
      }
      return;
    }
    multipartMap.Parts[this.request.params.PartNumber - 1] = {
      ETag: mData.ETag,
      PartNumber: Number(this.request.params.PartNumber)
    };
    console.log("Completed part", this.request.params.PartNumber);
    //console.log('mData', mData);
    if (--numPartsLeft > 0) return; // complete only when all parts uploaded

    var doneParams = {
      Bucket: BUCKET_NAME,
      Key: fileKey,
      MultipartUpload: multipartMap,
      UploadId: multipart.UploadId
    };

    console.log("Completing upload...");
    completeMultipartUpload(s3, doneParams,callback);
  });
}

// Multipart
 export  default function uploadMultiPart (buffer,fileName,cType,callback)  {
    
        fileKey=fileName;
        partNum=0;
        numPartsLeft = Math.ceil(buffer.length / partSize);
        var multiPartParams = {
            Bucket: BUCKET_NAME,
            Key: fileName,
            ContentType: cType
        };
        console.log("Creating multipart upload for:", fileKey);
        s3.createMultipartUpload(multiPartParams, function(mpErr, multipart){
        if (mpErr) { console.log('Error!', mpErr); return; }
        console.log("Got upload ID", multipart.UploadId);

        // Grab each partSize chunk and upload it as a part
        for (var rangeStart = 0; rangeStart < buffer.length; rangeStart += partSize) {
            partNum++;
            var end = Math.min(rangeStart + partSize, buffer.length),
                partParams = {
                Body: buffer.slice(rangeStart, end),
                Bucket: BUCKET_NAME,
                Key: fileKey,
                PartNumber: String(partNum),
                UploadId: multipart.UploadId
                };

            // Send a single part
            console.log('Uploading part: #', partParams.PartNumber, ', Range start:', rangeStart);
            uploadPart(s3, multipart, partParams,null,callback);
        }
        });
        //cb(finalRes);
}