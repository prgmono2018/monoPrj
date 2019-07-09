import { Request, Response } from "express";
import Game from '../model/game'

export let allGames = (req: Request, res: Response) => {
    console.log("Get Game List-all games")
 /*   let obj:{ imgSrc: string, href: string ,dataFancybox:string,dataType:string,dataSrc:string,index:number}[]=[
 
    
  ];*/

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
  res.send("update one book");
};

export let addGame = (req: Request, res: Response) => {
  res.send("add game");
};

export let deleteGame = (req: Request, res: Response) => {
    res.send("delete game");
  };