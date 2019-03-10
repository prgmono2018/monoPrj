exports.addCustomStorage=function(editor){
    editor.BlockManager.add('myImg', {
        //id: 'text',
        label: 'My Image',
      //  content: {
         // script: doSomething,
          content: { type: 'custImage' },
        //  },
          select: true,
          activate: true,
          //script: doSomething,
      
      })
     
    }