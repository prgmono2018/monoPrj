const express = require('express');
const router = require('./route/routes');
const bodyParser = require('body-parser');
var cors = require('cors');
const app = express();
app.use(bodyParser({limit: '50mb'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));

app.use(cors()); //enable cross origin- so I will able to use the gui
app.use('/', router);

/*app.listen(port, function(){
  console.log(`Listening to port ${port}`);
});*/

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });
module.exports = app;

