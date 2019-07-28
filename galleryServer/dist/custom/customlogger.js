"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var winston_1 = require("winston");
var path = __importStar(require("path"));
var combine = winston_1.format.combine, timestamp = winston_1.format.timestamp, label = winston_1.format.label, prettyPrint = winston_1.format.prettyPrint;
var CutomLogger = /** @class */ (function () {
    function CutomLogger() {
    }
    CutomLogger.logger = winston_1.createLogger({
        // change level if in dev environment versus production
        format: winston_1.format.combine(winston_1.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        })),
        transports: [
            new winston_1.transports.Console({
                level: 'debug',
                format: winston_1.format.combine(winston_1.format.colorize(), winston_1.format.printf(function (info) { return info.timestamp + " " + info.level + ": " + info.message; }))
            }),
            new winston_1.transports.File({ filename: path.join('logs', 'results.log') })
        ]
    });
    return CutomLogger;
}());
exports.CutomLogger = CutomLogger;
//# sourceMappingURL=customlogger.js.map