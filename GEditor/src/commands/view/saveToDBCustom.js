import data from 'editor/editorCustomData'
var $ = require('jQuery');
//const fs = require('fs');
//import fs from 'fs'; 
module.exports = {

    run(editor, sender) {
      sender.set('active', false);
      data.saveDataToFile();


  /*    const bm = editor.BlockManager;
      const pn = editor.Panels;
  
      if (!this.blocks) {
        bm.render();
        const id = 'views-container';
        const blocks = document.createElement('div');
        const panels = pn.getPanel(id) || pn.addPanel({ id });
        blocks.appendChild(bm.getContainer());
        panels.set('appendContent', blocks).trigger('change:appendContent');
        this.blocks = blocks;
      }
  alert
      this.blocks.style.display = 'block';*/
      //var html=editor.getHtml() ;
        //alert("tmp="+data.getData()+"localStorage.getData="+localStorage.setItem('myData',data.getData()));
       // localStorage.setItem('myData', data.getData());
       // const blocks = this.blocks;
       // blocks && (blocks.style.display = 'none');
    },
  
/*    stop() {
      const blocks = this.blocks;
      blocks && (blocks.style.display = 'none');
      alert("bbb")
    }*/
  };
  