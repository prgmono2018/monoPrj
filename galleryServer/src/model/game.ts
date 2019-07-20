import * as mongoose from "mongoose";

const uri: string = "mongodb://127.0.0.1:27017/MonoPrj";

mongoose.connect(uri, (err: any) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Succesfully Connected!");
  }
});


export interface IGame extends mongoose.Document {
    name: string,
    imgSrc :  String;
    href : String;
    dataFancybox : String;
    dataType : String;
    dataSrc : String;
    index :  Number;
}

export const GameSchema = new mongoose.Schema({
    name : { type: String, required: true },
    imgSrc : { type: String, required: true },
    href : { type: String, required: true },
    dataFancybox : { type: String, required: false },
    dataType :  { type: String, required: false },
    dataSrc :  { type: String, required: false },
    index : { type: Number, required: true },
});

const Game = mongoose.model<IGame>("Game", GameSchema); 
export default Game;