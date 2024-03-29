"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var game_1 = __importDefault(require("../model/game"));
var formidable = __importStar(require("formidable"));
var mongoose = __importStar(require("mongoose"));
var customlogger_1 = require("../custom/customlogger");
exports.allGames = function (req, res) {
    customlogger_1.CutomLogger.logger.log("info", "Get Game List-all games");
    var games = game_1.default.find().sort('index').exec(function (err, games) {
        if (err) {
            res.send("Error!");
        }
        else {
            res.send(games);
        }
    });
};
exports.getGame = function (req, res) {
};
exports.updateGame = function (req, res) {
    console.log('updateGame');
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        var obj = {
            dataSrc: fields.dataSrc,
            dataFancybox: fields.dataFancybox,
            name: fields.name,
            index: fields.index,
            href: fields.href,
            imgSrc: fields.imgSrc,
            dataType: fields.dataType
        };
        //console.log("obj="+JSON.stringify(obj));
        var myId = new mongoose.Types.ObjectId(fields._id);
        game_1.default.findByIdAndUpdate(myId, { $set: obj }, { new: true }).then(function (docs) {
            if (docs) {
                console.log("Found docs");
                return res.send(docs);
            }
            else {
                return res.status(500).send("Document not found");
            }
        }).catch(function (err) {
            console.log("error=" + err);
            return res.status(500).json(err);
        });
    });
    //return res.json({ success: true });
};
exports.addGame = function (req, res) {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        var obj = {
            dataSrc: fields.dataSrc,
            dataFancybox: fields.dataFancybox,
            name: fields.name,
            index: fields.index,
            href: fields.href,
            imgSrc: fields.imgSrc,
            dataType: fields.dataType
        };
        console.log("obj=" + JSON.stringify(obj));
        game_1.default.create(obj).then(function (docs) {
            if (docs) {
                console.log("added???");
                return res.send(docs);
            }
        }).catch(function (err) {
            console.log("error=" + err);
            return res.status(500).json(err);
        });
    });
};
exports.deleteGame = function (req, res) {
    console.log('deleteGame');
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        var obj = {
            dataSrc: fields.dataSrc,
            dataFancybox: fields.dataFancybox,
            name: fields.name,
            index: fields.index,
            href: fields.href,
            imgSrc: fields.imgSrc,
            dataType: fields.dataType
        };
        console.log("obj=" + JSON.stringify(obj));
        var myId = new mongoose.Types.ObjectId(fields._id);
        game_1.default.findByIdAndDelete(myId).then(function (docs) {
            if (docs) {
                console.log("Found docs-deleted");
                return res.send(docs);
            }
            else {
                return res.json({ success: false, txt: "document not found" });
            }
        }).catch(function (err) {
            console.log("error=" + err);
            return res.status(500).json(err);
        });
    });
    //return res.j
};
//# sourceMappingURL=gameController.js.map