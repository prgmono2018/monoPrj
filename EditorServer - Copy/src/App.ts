import { CutomLogger } from './custom/Logger';
import express = require('express');
//var cors= require("cors");

// Create a new express application instance
const app: express.Application = express();

app.get('/', function (req, res) {
 (CutomLogger as any).logger.debug("ddd");
  res.send('Hello World!');
});

export default app;