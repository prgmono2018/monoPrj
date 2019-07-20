"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var uri = "mongodb://127.0.0.1:27017/MonoPrj";
mongoose.connect(uri, function (err) {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("Succesfully Connected!");
    }
});
exports.GameSchema = new mongoose.Schema({
    name: { type: String, required: true },
    imgSrc: { type: String, required: true },
    href: { type: String, required: true },
    dataFancybox: { type: String, required: false },
    dataType: { type: String, required: false },
    dataSrc: { type: String, required: false },
    index: { type: Number, required: true },
});
var Game = mongoose.model("Game", exports.GameSchema);
exports.default = Game;
//# sourceMappingURL=game.js.map