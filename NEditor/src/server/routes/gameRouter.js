var express = require('express');
var router = express.Router();
const log = require('../custom/logger');
const gameModel = require('../model/gameModel');

/* GET users listing. */
router.get('/getAllProjects', function(req, res) {
  log.debug("get all")
  gameModel.find({}, function(err, docs) {
    if (!err){ 
        res.json({uuid:"all","op":"getall","docs": docs});
    } else {
      log.error(err.stack);
    }
});
});

router.post('/save', function(req, res) {
  //  let fileName =req.query.data;
  log.info(">>> save");
  const prjName = req.body.prjName;
  const newDocument = req.body.new;
  const preload = req.body.code1;
  const create = req.body.code2;
  const update = req.body.code3
  const render = req.body.code4;
  var gameM = new gameModel({preload:preload,update:update,render:render,create:create,prjName:req.body.prjName });
  if (newDocument=="true"){
        gameM.save()
        .then(item => {
          res.json({uuid:item.prjName,"op":"insert","txt":`The project ${item.prjName} was saved`});
        })
        .catch(err => {
          if (err.code=="11000")
          {
              log.error("Project exists "+err.stack);
              res.status(500).send({ "txt": "There is already project with that name. pls choose another"});
          }else{
            log.error(err.stack);
            res.status(500).send({"txt": "server error"});
          }
          log.error("The error="+err);
        });
  }else{
    let obj={
      preload:preload,update:update,render:render,create:create,prjName:req.body.prjName 
    };

    gameModel.update( { prjName: prjName},{$set:obj},{new:false}).then((docs)=>{
      if(docs) {
        res.json({uuid:prjName,"op":"update","txt":`The project ${prjName} was updated`});
      } else {
        res.status(500).send({"txt": "Server Error"});
      }
    }).catch((err)=>{
      log.error("Error Stack: "+err.stack);
      return res.status(500).json({uuid:prjName,"op":"update","txt":"Server Error Occured",err:err});
    })


  }
});

router.get('/get/:name', function(req, res) {
  log.info("get by name:")
  //const prjName = req.body.prjName;
  const prjName =req.params.name;
  gameModel.find({prjName:prjName}, function(err, docs) {
    if (!err){ 
        //log.debug(docs);
        res.json({uuid:"all","op":"getOne","docs": docs});
    } else {
      log.error(err.stack);
      throw err;
    }
});
});



module.exports = router;