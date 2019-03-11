//Saves the editor data
//const fs = require('fs');

var data = [];

function getData  () {
   return data;
}

function pushData (obj) {
   data.push(obj)
}

/*function saveDataToFile(obj){
   fs.writeFile('data.txt', obj, function (err) {
      if (err) 
          return console.log(err);
      alert('Wrote Hello World in file helloworld.txt, just check it');
  });
}*/

module.exports.pushData = pushData;  
module.exports.getData = getData;  
//module.exports.saveDataToFile = saveDataToFile;  