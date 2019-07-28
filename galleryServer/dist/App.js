"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
//import * as express from 'express'
var path = __importStar(require("path"));
var fs = __importStar(require("fs"));
var formidable = __importStar(require("formidable"));
//import * as cors from  'cors';
var gameController = __importStar(require("./controllers/gameController"));
var bodyParser = __importStar(require("body-parser"));
var express = require("express");
var cors = require("cors");
var App = /** @class */ (function () {
    function App() {
        this.loc = path.join(__dirname, '..', 'data');
        this.express = express();
        this.mountRoutes();
        this.initStaticFiles();
        this.express.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }
    App.prototype.mountRoutes = function () {
        var _this = this;
        var router = express.Router();
        router.get('/', function (req, res) {
            res.json({
                message: "hello!!"
            });
        });
        router.get('/gameList', cors(), gameController.allGames).bind(this);
        router.post('/updateGame', cors(), gameController.updateGame).bind(this);
        router.post('/addGame', cors(), gameController.addGame).bind(this);
        router.post('/deleteGame', cors(), gameController.deleteGame).bind(this);
        router.get('/listFiles', cors(), function (req, res) {
            console.log("lost");
            //const loc:string=path.join(__dirname, '..', 'data');
            fs.readdir(_this.loc, function (err, files) {
                res.contentType('application/json');
                return res.send(files);
            });
        }).bind(this);
        router.post('/switchFile', cors(), function (req, res) {
            var fileName = "";
            var file = null;
            var newName = null;
            console.log('switchFile');
            var form = new formidable.IncomingForm();
            var form = new formidable.IncomingForm();
            var loc = _this.loc;
            form.on('fileBegin', function (name, file, fields) {
                file.path = loc + "\\" + file.name;
                fileName = file.name;
            });
            form.parse(req, function (err, fields, files) {
                file = files.file;
                newName = fields.delete;
                fs.rename(loc + "\\" + fileName, loc + "\\" + newName, function (err) {
                    if (err)
                        console.log('ERROR: ' + err);
                });
            });
            form.on('file', function (field, file) {
                console.log("I am in file.");
                //rename the incoming file to the file's name
                //fs.rename(file.path, form.uploadDir + "/" + file.name);
            });
            return res.json({ success: true });
        }).bind(this);
        var options = {
            allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
            credentials: true,
            methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
            origin: "*",
            preflightContinue: false
        };
        router.use(cors());
        //add your routes
        //enable pre-flight
        router.options("*", cors(options));
        this.express.use('/', router);
    };
    App.prototype.initStaticFiles = function () {
        this.express.use(express.static(this.loc));
    };
    return App;
}());
exports.default = new App().express;
//# sourceMappingURL=App.js.map