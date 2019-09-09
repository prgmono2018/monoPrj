import {createLogger, format, transports,Logger} from 'winston'
//const { createLogger, format, transports } = require('winston');

const logger:Logger = createLogger({
  level: 'debug',
  format: format.combine(format.colorize(), format.simple()),
  transports: [new transports.Console()]
});


module.exports = logger;