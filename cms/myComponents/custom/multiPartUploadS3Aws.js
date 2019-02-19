
var AWS = require('aws-sdk');
var arrayBufferToBuffer = require('arraybuffer-to-buffer');
AWS.config.update({accessKeyId: AWS_ACCESS_KEY, secretAccessKey: AWS_SECRET_KEY});
AWS.config.region="eu-central-1";
const AWS_ACCESS_KEY = 'AKIAI4SY3RJNRALPQXOA';
const AWS_SECRET_KEY = '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';
const fileToArrayBuffer = require('file-to-array-buffer')
const BUCKET_NAME = 'prj.releases';
const IAM_USER_KEY = 'AKIAI4SY3RJNRALPQXOA';
const IAM_USER_SECRET = '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'; 

export  default function  (file) {

  AWS.config.region="eu-central-1";
  let s3 = new AWS.S3({
    accessKeyId: IAM_USER_KEY,
    secretAccessKey: IAM_USER_SECRET,
    Bucket: BUCKET_NAME,
  });

  var multipartParams = {
    Bucket: 'prj.releases',
    Key: file.name,
    ContentType: file.type
  };

  fileToArrayBuffer(file).then((data) => {
    var buffer = arrayBufferToBuffer(data);
    console.log(buffer);
    console.log(data);

  var startTime = new Date();
  var partNum = 0;
  var partSize = 1024 * 1024 * 5; // 5mb chunks except last part
  var numPartsLeft = Math.ceil(buffer.length / partSize);
  var maxUploadTries = 3;


  var multipartMap = {
    Parts: []
  };

  console.log('Creating multipart upload for:', file.name);
  s3.createMultipartUpload(multipartParams, function(mpErr, multipart) {
    if (mpErr) return console.error('Error!', mpErr);
    console.log('Got upload ID', multipart.UploadId);

    for (var start = 0; start < buffer.length; start += partSize) {
      partNum++;
      var end = Math.min(start + partSize, buffer.length);
      var partParams = {
        Body: buffer.slice(start, end),
        Bucket: multipartParams.Bucket,
        Key: multipartParams.Key,
        PartNumber: String(partNum),
        UploadId: multipart.UploadId
      };

      console.log('Uploading part: #', partParams.PartNumber, ', Start:', start);
      uploadPart(s3, multipart, partParams,numPartsLeft);
    }
  });


})





  function completeMultipartUpload(s3, doneParams) {
    s3.completeMultipartUpload(doneParams, function(err, data) {
      if (err) return console.error('An error occurred while completing multipart upload');
      var delta = (new Date() - startTime) / 1000;
      console.log('Completed upload in', delta, 'seconds');
      console.log('Final upload data:', data);
    });
  }

  function uploadPart(s3, multipart, partParams, tryNum,numPartsLeft,multipartMap ) {
    var tryNum = tryNum || 1;
    s3.uploadPart(partParams, function(multiErr, mData) {
      console.log('started');
      if (multiErr) {
        console.log('Upload part error:', multiErr);

        if (tryNum < maxUploadTries) {
          console.log('Retrying upload of part: #', partParams.PartNumber);
          uploadPart(s3, multipart, partParams, tryNum + 1,numPartsLeft);
        } else {
          console.log('Failed uploading part: #', partParams.PartNumber);
        }
        // return;
      }

      multipartMap.Parts[this.request.params.PartNumber - 1] = {
        ETag: mData.ETag,
        PartNumber: Number(this.request.params.PartNumber)
      };
      console.log('Completed part', this.request.params.PartNumber);
      console.log('mData', mData);
      if (--numPartsLeft > 0) return; // complete only when all parts uploaded

      var doneParams = {
        Bucket: multipartParams.Bucket,
        Key: multipartParams.Key,
        MultipartUpload: multipartMap,
        UploadId: multipart.UploadId
      };

      console.log('Completing upload...');
      completeMultipartUpload(s3, doneParams);
    });
  }

  // console.log(stream);
  // s3.upload(params).
  //   on('httpUploadProgress', function(progress) { console.log(progress); }).
  //   send(function(err, data) { console.log(err, data) });
	// var s3 = new AWS.S3();
	// var params = {Bucket: 'videos.imstillreallybored', Key: req.body.name, ContentType: req.body.type};
	// s3.getSignedUrl('putObject', params, function(err, url) {
	// 	if(err) console.log(err);
	// 	res.json({url: url});
  //
	// });
  // console.log(Math.round(progress.loaded/progress.total*100)+ '% done')
}


