import { Request, Response } from "express";
import Game from '../model/game'
import * as formidable from  'formidable';
import * as mongoose from "mongoose";
import { CutomLogger } from '../custom/customlogger';


export let allGames = (req: Request, res: Response) => {
  CutomLogger.logger.log("info","Get Game List-all games");
  let games = Game.find().sort('index').exec((err: any, games: any) => {
    if (err) {
      res.send("Error!");
    } else {
      res.send(games);
    }
  });
  
};

export let getGame = (req: Request, res: Response) => {
   
    
};


export let updateGame = (req: Request, res: Response) => {
  

  console.log('updateGame');
  var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {

    let obj={
      dataSrc:<string>fields.dataSrc,
      dataFancybox:<string>fields.dataFancybox,
      name:<string>fields.name,
      index:<number><any>fields.index,
      href:<string>fields.href,
      imgSrc:<string>fields.imgSrc,
      dataType:<string>fields.dataType
    };

    //console.log("obj="+JSON.stringify(obj));
    var myId = new mongoose.Types.ObjectId(<string>fields._id)

Game.findByIdAndUpdate(myId,{$set:obj},{new:true}).then((docs)=>{
  if(docs) {
    console.log("Found docs");
    return res.send(docs);
  } else {
    return res.status(500).send("Document not found");

  }
}).catch((err)=>{
  console.log("error="+err);
  return res.status(500).json(err);

})



});
//return res.json({ success: true });
};

export let addGame = (req: Request, res: Response) => {
  
  var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {

    let obj={
      dataSrc:<string>fields.dataSrc,
      dataFancybox:<string>fields.dataFancybox,
      name:<string>fields.name,
      index:<number><any>fields.index,
      href:<string>fields.href,
      imgSrc:<string>fields.imgSrc,
      dataType:<string>fields.dataType
    };

    console.log("obj="+JSON.stringify(obj));


Game.create(obj).then((docs)=>{
  if(docs) {
    console.log("added???");
    return res.send(docs);
  } 
}).catch((err)=>{
  console.log("error="+err);
  return res.status(500).json(err);

})



});
};

export let deleteGame = (req: Request, res: Response) => {
   
    console.log('deleteGame');
  var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {

    let obj={
      dataSrc:<string>fields.dataSrc,
      dataFancybox:<string>fields.dataFancybox,
      name:<string>fields.name,
      index:<number><any>fields.index,
      href:<string>fields.href,
      imgSrc:<string>fields.imgSrc,
      dataType:<string>fields.dataType
    };

    console.log("obj="+JSON.stringify(obj));
    var myId = new mongoose.Types.ObjectId(<string>fields._id)

Game.findByIdAndDelete(myId).then((docs)=>{
  if(docs) {
    console.log("Found docs-deleted");
    return res.send(docs);
  }else{
    return res.json({ success: false, txt: "document not found" });
  }
}).catch((err)=>{
  console.log("error="+err);
  return res.status(500).json(err);

})



});
//return res.j
  };