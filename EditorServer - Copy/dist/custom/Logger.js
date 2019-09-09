"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
//const { createLogger, format, transports } = require('winston');
const logger = winston_1.createLogger({
    level: 'debug',
    format: winston_1.format.combine(winston_1.format.colorize(), winston_1.format.simple()),
    transports: [new winston_1.transports.Console()]
});
module.exports = logger;
//# sourceMappingURL=Logger.js.map