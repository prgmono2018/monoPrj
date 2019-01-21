var express = require('express');
var router = express.Router();
var saver=require('../actions/saveTemplate');
router.get('/', function(req, res){
    res.send("Choose an action");
 });
  
  
router.post('/saveDraft',saver.writeTemplateToJsonFile);
//router.get("/getSkin",saver.getDataFromJsonFile);
/*router.get('/getSkin', function(req, res){
    console.log("bla");
 });*/

 router.get('/getSkin', saver.getDataFromJsonFile);
module.exports = router;