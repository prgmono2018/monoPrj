//Saves the editor data
//const fs = require('fs');
var templateNames= localStorage.getItem('templateNames');
var Template = require('./Template.js');
var actualTemplate=getTemplate('');
//var actualTemplateName='newTemplate';


function getTemplate(name){
   if (templateNames==null || name==""){
      return new Template.Template('newTemplate');
   }
   templateNames.forEach(function(element) {
      if (element.name==name){
         //actualTemplateName=element.name;
         return element;
      }
    });
   // actualTemplateName="newTemplate";
    
}

function pushDataToActualTelmplate (obj) {
   actualTemplate.pushData(obj);
}

function saveDataToFile(){
   localStorage.setItem(actualTemplate.getName(),actualTemplate);
   if (templateNames==null){
      templateNames=[];
   }
   templateNames.push(actualTemplate.getName());
   localStorage.setItem('templateNames',templateNames);
}

function addNewTemplate(template){
   templateName=template.getName();
   localStorage.setItem(templateName,actualTemplate);
   templateNames.push(templateName);
   localStorage.setItem("templateNames",templateNames);
}

module.exports.getTemplate = getTemplate;  
module.exports.pushDataToActualTelmplate = pushDataToActualTelmplate;  
module.exports.saveDataToFile = saveDataToFile; 
module.exports.addNewTemplate = addNewTemplate;   