
var actualTemplate = {name:"newTemplate",obj:[]};
var templateList = [];
var test = 'test';

module.exports.getActualTemplate = function () { 
    return actualTemplate;
};

module.exports.getTest = function () { 
    return test;
};

module.exports.getActualTemplateArr = function () { 
    console.log(JSON.stringify(actualTemplate));
    return actualTemplate.obj;
};

module.exports.setActualTemplate = function (obj) { 
   
    actualTemplate=obj;
    console.log(JSON.stringify(actualTemplate));

};


module.exports.getTemplateList = function () { 
    return templateList;
};

module.exports.setTemplateList = function (obj) { 
    templateList=obj;
};

module.exports.pushToActualTemplate = function (obj) { 
    actualTemplate.obj.push(obj);
};

module.exports.getListTemplatesFromServer = function () { 
   
};


module.exports.preapareDataForm = function (fd) { 
    actualTemplate.obj.forEach((elm, index) => {
        fd.append("all",JSON.stringify(actualTemplate));
        fd.append('name',JSON.stringify(elm));
        fd.append('obj',JSON.stringify(actualTemplate.name));
 
        if (elm.file!='undefined'){
            fd.append('file'+index,elm.file);
        }
    });
    
    return fd;
};


module.exports.getTemplateList = function (fd) { 
    actualTemplate.obj.forEach((elm, index) => {
        fd.append("all",JSON.stringify(actualTemplate));
        fd.append('name',JSON.stringify(elm));
        fd.append('obj',JSON.stringify(actualTemplate.name));
 
        if (elm.file!='undefined'){
            fd.append('file'+index,elm.file);
        }
    });
    
    return fd;
};








