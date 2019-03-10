  
  //block 
  
  exports.bla=function(editor){
    editor.BlockManager.add('zzz', {
        //id: 'text',
        label: 'zzz',
        content: {
          script: this.doSomething,
          content: '<div data-gjs-type="text">Insert your text here</div>'
          }
      })
     
    }
