//var fs = require("fs");
//import * as fss from 'fs'
exports.saveData= function (obj)
 {
    fs.writeFile('helloworld.txt', 'Hello World!', function (err) {
        if (err) 
            return alert(err);
        alert('Wrote Hello World in file helloworld.txt, just check it');
    });
 }

