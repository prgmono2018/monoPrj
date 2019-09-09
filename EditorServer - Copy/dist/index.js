"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = require("./App");
const port = process.env.PORT || 3000;
//CutomLogger.logger.debug("jjjj")
App_1.default.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=index.js.map