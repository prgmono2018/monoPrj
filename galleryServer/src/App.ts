import * as express from 'express'
import * as path from 'path';
import * as fs from 'fs';
import * as formidable from  'formidable';
import * as cors from  'cors';
import * as gameController from  './controllers/gameController';

class App {
  public express
  public loc:string=path.join(__dirname, '..', 'data');
  constructor () {
    this.express = express()
    this.mountRoutes()
    this.initStaticFiles ()
  }

  private mountRoutes (): void {
    const router = express.Router()
    router.get('/', (req, res) => {
      res.json({
        message: "hello!!"
      })
    })

    router.get('/gameList',cors(),gameController.allGames).bind(this)
    

    router.get('/listFiles',cors(), (req, res) => {
      console.log("lost")
         //const loc:string=path.join(__dirname, '..', 'data');
          fs.readdir(this.loc, (err, files) => {
            res.contentType('application/json');
            return res.send(files);
          });
      }).bind(this)
      
    router.post('/switchFile', cors(),(req, res) => {
        let fileName:string="";
        let file=null;
        let  newName=null;
        console.log('switchFile');
        var form = new formidable.IncomingForm();
        var form = new formidable.IncomingForm();
        const loc= this.loc;
        form.on('fileBegin', function(name, file,fields) {
          file.path = loc + "\\" + file.name;
          fileName=file.name;
        })
        form.parse(req, function (err, fields, files) {
           file=files.file;
           newName=fields.delete;
           fs.rename(loc + "\\" + fileName, loc + "\\" + newName, function(err) {
            if ( err ) console.log('ERROR: ' + err);
          });
      });
      form.on('file', function(field, file) {
        console.log("I am in file.");
        //rename the incoming file to the file's name
        //fs.rename(file.path, form.uploadDir + "/" + file.name);
      })
      
      return res.json({ success: true });



  }).bind(this)
  const options:cors.CorsOptions = {
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
    credentials: true,
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
    origin: "*",
    preflightContinue: false
  };
  router.use(cors());

  //add your routes
  
  //enable pre-flight
  router.options("*", cors(options));
    this.express.use('/', router)
 
  }


  private initStaticFiles (): void {
    this.express.use(express.static(this.loc));
  }
}

export default new App().express