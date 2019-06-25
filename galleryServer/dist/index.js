"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var App_1 = require("./App");
var port = process.env.PORT || 8000;
App_1.default.listen(port, function (err) {
    if (err) {
        return console.log(err);
    }
    return console.log("server is listening on " + port);
});
//# sourceMappingURL=index.js.map