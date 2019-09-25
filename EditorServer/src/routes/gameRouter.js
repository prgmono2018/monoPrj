var express = require('express');
var router = express.Router();
const log = require('../custom/logger');
const gameModel = require('../model/gameModel');

/* GET users listing. */
router.get('/getAllProjects', function(req, res, next) {
  log.debug("get all")
  gameModel.find({}, function(err, docs) {
    if (!err){ 
        log.debug(docs);
        res.json({uuid:"all","op":"getall","docs": docs});
    } else {throw err;}
});
});

router.post('/save', function(req, res, next) {
  //  let fileName =req.query.data;
  log.debug(">>>>> save");
  const prjName = req.body.prjName;
  const newDocument = req.body.new;
  const preload = req.body.code1;
  const create = req.body.code2;
  const update = req.body.code3
  const render = req.body.code4;
  //  let fileName =req.query.data;
  log.debug("render:"+render);
  log.debug("preload:"+preload);
  log.debug("create:"+create);
  log.debug("update:"+update);
  log.debug("1111111ddd111111");
  var gameM = new gameModel({preload:preload,update:update,render:render,create:create,prjName:req.body.prjName });
  log.debug("11111111111111111");
  if (newDocument=="true"){
        gameM.save()
        .then(item => {
          res.json({uuid:item.prjName,"op":"insert","txt":`The project ${item.prjName} was saved`});
        })
        .catch(err => {
          if (err.code=="11000")
          {
              res.status(500).send({ "txt": "There is already project with that name. pls choose another"});
          }else{
            res.status(500).send({"txt": "server error", "error":err});
          }
          log.error("this is error="+err)
        });
  }else{
    let obj={
      preload:preload,update:update,render:render,create:create,prjName:req.body.prjName 
    };

    gameModel.update( { prjName: prjName},{$set:obj},{new:false}).then((docs)=>{
      if(docs) {
        res.json({uuid:prjName,"op":"update","txt":`The project ${prjName} was updated`});
      } else {
        log.error("error update1="+err);
        res.status(500).send({"txt": "server error"});
      }
    }).catch((err)=>{
      log.error("error update="+err);
      return res.status(500).json({uuid:item.prjName,"op":"update","txt":err.txt});
    
    })


  }
});

router.get('/get/:name', function(req, res, next) {
  log.debug("get by name")
  //const prjName = req.body.prjName;
  const prjName =req.params.name;
  gameModel.find({prjName:prjName}, function(err, docs) {
    if (!err){ 
        log.debug(docs);
        res.json({uuid:"all","op":"getOne","docs": docs});
    } else {throw err;}
});
});

module.exports = router;