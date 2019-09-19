const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gameData = new Schema({
  prjName: {
    type: String,unique : true
  },
  render: {
     type: String 
  },
  update: {
    type: String 
 },
 create: {
    type: String 
 },
 preload: {
    type: String 
 },
 width: {
   type: String 
},
height: {
   type: String 
}
},{
    collection: 'gameDatas'
});
var gameModel= mongoose.model('gameData', gameData);
module.exports = gameModel