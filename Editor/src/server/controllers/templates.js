const fs = require('fs');
const path = require('path');
const IncomingForm = require('formidable').IncomingForm;
const rootFolder="config/";

exports.saveTemplate = function (req, res) {
  var imageUrl=[];
 
  var form = new IncomingForm()
  form.uploadDir = path.join(__dirname, "uploads");
  console.log(form.uploadDir);

  form.parse(req, function (err, fields, files) {
    console.log("imageurl"+imageUrl);
    var template=null;
    try{
     template=JSON.parse(fields.all);
    }catch(err){
      console.error(err);
      return;
    }
     templateName=template.name;
    try {
      if (!fs.existsSync(rootFolder+templateName)){
        fs.mkdirSync(rootFolder+templateName)
      }
    } catch (err) {
      console.error(err)
    }
    fs.writeFileSync(rootFolder+templateName+'/data.json', JSON.stringify(fields.all) , 'utf-8'); 
    imageUrl.forEach((item)=>{
      moveFile(item.url,rootFolder+templateName+"/"+item.name);
    });
});



form.on('fileBegin', function(name, file) {
  file.path =  path.join(__dirname, "uploads")+"/"+file.name;
  imageUrl.push({url: path.join(__dirname, "uploads")+"/"+file.name,name:file.name});
 // console.log("fbegin="+ path.join(__dirname, "uploads")+"/"+file.name);
});





}

function copy() {
  var readStream = fs.createReadStream(oldPath);
  var writeStream = fs.createWriteStream(newPath);

  readStream.on('error', callback);
  writeStream.on('error', callback);

  readStream.on('close', function () {
      fs.unlink(oldPath, callback);
  });

  readStream.pipe(writeStream);
}
function moveFile(oldPath,newPath){
  console.log("1="+oldPath+" 2="+newPath);
    fs.rename(oldPath, newPath, function (err) {
      if (err) {
          if (err.code !== 'EXDEV') {
              copy();
          } 
          return;
      }
      //callback();
  });
  }




exports.getTemplateList = function (req, res) {
  console.log("blaaaaaaaaaaaaaaaaaaaaaa")


  fs.readdir(rootFolder, function(err, items) {
    console.log(items);
    res.json(items);

});

}


