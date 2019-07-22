import {createLogger, format, transports} from 'winston'
import * as path from 'path';
const { combine, timestamp, label, prettyPrint } = format;
export class CutomLogger{
 

  static logger = createLogger({
    // change level if in dev environment versus production
     format: format.combine(
      format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss'
      }),
     /// format.json()
    ),
    transports: [
      new transports.Console({
        level: 'debug',
        format: format.combine(
          format.colorize(),
          format.printf(
            info => `${info.timestamp} ${info.level}: ${info.message}`
          )
        )
      }),
      new transports.File({filename:path.join('logs', 'results.log')})
    ]
  });

}