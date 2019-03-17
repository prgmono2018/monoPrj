export class Template {
    constructor(name) {
       if (name==''){
          this.name = 'newTemplate';
       }else{
          this.name = name;
       }
      this.data=[];
    }
    pushData (obj) {
       this.data.push(obj)
    }
    setName (name) {
      this.name=name;
    }
    getName () {
       return this.name;
     }
  }
 