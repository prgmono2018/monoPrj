const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});
const logger = createLogger({
  level: 'debug',
  format: combine(
    label({ label: '>> msg <<' }),
    timestamp(),
    myFormat
  ),
  transports: [new transports.Console(),
    new transports.File({
      level: 'debug',
      filename: process.cwd() + '/logs/all.log',

    }),
    new transports.File({ filename: process.cwd() + '/logs/error.log', level: 'error'}),
  ]
});


module.exports = logger;