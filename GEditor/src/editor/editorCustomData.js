//Saves the editor data
//const fs = require('fs');
import App from './saveTemplate' 
import * as data from 'editor/saveTemplate'

function pushDataToActualTelmplate (obj) {
   data.actualTemplate.pushData(obj);
}

function saveDataToFile(){
   localStorage.setItem( data.actualTemplate.getName(), data.actualTemplate);
   if ( data.templateNames==null){
      data.templateNames=[];
   }

   data.templateNames.push( data.actualTemplate.getName());
   localStorage.setItem('templateNames', data.templateNames);
}

function addNewTemplate(template){
   templateName=template.getName();
   localStorage.setItem(templateName, data.actualTemplate);
   data.templateNames.push(templateName);
   localStorage.setItem("templateNames", data.templateNames);
}

function buildTemplateSelectBox(template){
  /* var select='<label for="sel1">Select list:</label><select onchange=onChangeSelect() class="form-control" id="templatesSelect">';
   if (templateNames.length>0){
   templateNames.forEach(function(element) {
      select=select+ '<option>'+element+'</option>';
   });
   
}
return select+'<option>New Template</option></select>';*/
 return new App.App();
}

function onChangeSelect(){
  alert("jjj")

}

module.exports.pushDataToActualTelmplate = pushDataToActualTelmplate;  
module.exports.saveDataToFile = saveDataToFile; 
module.exports.addNewTemplate = addNewTemplate;   
module.exports.buildTemplateSelectBox = buildTemplateSelectBox;  
