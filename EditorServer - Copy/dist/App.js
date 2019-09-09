"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Logger_1 = require("./custom/Logger");
const express = require("express");
//var cors= require("cors");
// Create a new express application instance
const app = express();
app.get('/', function (req, res) {
    Logger_1.default.debug("ddd");
    res.send('Hello World!');
});
exports.default = app;
//# sourceMappingURL=App.js.map