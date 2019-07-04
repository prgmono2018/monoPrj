import * as express from 'express'
import * as path from 'path';
import * as fs from 'fs';
import * as formidable from  'formidable';
import * as cors from  'cors';

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
        message: "hello"
      })
    })

    router.get('/gameList',cors(), (req, res) => {
      console.log("Get Game List")
      let obj:{ imgSrc: string, href: string ,dataFancybox:string,dataType:string,dataSrc:string}[]=[
        { "imgSrc": "src/img/1.png","href":"https://ronbar-poc.stagika.com/slider/swiper-master/demos/150-freemode.html" ,"dataFancybox":"","dataType":"","dataSrc":""},
        { "imgSrc": "src/img/2.png","href":"https://ronbar-poc.stagika.com/slider/swiper-master/demos/150-freemode.html" ,"dataFancybox":"","dataType":"","dataSrc":""},
        { "imgSrc": "src/img/3.png","href":"javascript:;" ,"dataFancybox":"","dataType":"iframe","dataSrc":"http://ikonen.me/examples/slot/"},
        { "imgSrc": "src/img/4.png","href":"javascript:;" ,"dataFancybox":"","dataType":"iframe","dataSrc":"http://showcase.codethislab.com/games/3d_soccer_slot/"},
        { "imgSrc": "src/img/5.png","href":"javascript:;" ,"dataFancybox":"","dataType":"iframe","dataSrc":"https://ronbar-poc.stagika.com/cordova_web/slot.html?game_id=10353"},
        { "imgSrc": "src/img/6.png","href":"javascript:;" ,"dataFancybox":"","dataType":"iframe","dataSrc":"https://juicydeli.com/slotomania_pwa/slot.html?game_id=1"},
        { "imgSrc": "src/img/7.png","href":"javascript:;" ,"dataFancybox":"","dataType":"iframe","dataSrc":"http://bot.playtika.com/games/ver1/sm/slotomania_pwa/index.html"},
        { "imgSrc": "src/img/8.png","href":"javascript:;" ,"dataFancybox":"","dataType":"iframe","dataSrc":"http://showcase.codethislab.com/games/slot_ultimate_soccer/"},
        { "imgSrc": "src/img/9.png","href":"javascript:;" ,"dataFancybox":"","dataType":"iframe","dataSrc":"http://showcase.codethislab.com/games/slot_mr_chicken/"},
        { "imgSrc": "src/img/10.png","href":"javascript:;" ,"dataFancybox":"","dataType":"iframe","dataSrc":"http://showcase.codethislab.com/games/slot_space_adventure/"},
        { "imgSrc": "src/img/11.png","href":"javascript:;" ,"dataFancybox":"","dataType":"iframe","dataSrc":"http://showcase.codethislab.com/games/casino_spin_and_win/"},
        { "imgSrc": "src/img/12.png","href":"javascript:;" ,"dataFancybox":"","dataType":"iframe","dataSrc":"http://showcase.codethislab.com/games/horse_racing/"},
        { "imgSrc": "src/img/13.png","href":"javascript:;" ,"dataFancybox":"","dataType":"iframe","dataSrc":"http://showcase.codethislab.com/games/roulette/"},
        { "imgSrc": "src/img/14.png","href":"javascript:;" ,"dataFancybox":"","dataType":"iframe","dataSrc":"http://showcase.codethislab.com/games/slot_space_adventure/"},
    ];

      return res.send(obj);
      }).bind(this)
    

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