import $ from 'cash-dom';
//import * as data from 'editor/editorCustomData'
var Template = require('./Template.js');
var templateNames= localStorage.getItem('templateNames');
if(templateNames==null){
   templateNames=[];
}
templateNames=templateNames.split(",");
var Template = require('./Template.js');
var actualTemplate=getTemplate('');
//var actualTemplateName='newTemplate';



if(templateNames==null){
   templateNames=[];
}
if (templateNames.indexOf(',')!=-1){
    templateNames=templateNames.split(",");
}

var TemplateModel = Backbone.Model.extend({

    // Will contain three attributes.
    // These are their default values

    defaults:{
        name: 'My template',
        data:{}
    },

});
// Create a collection of services
var TemplateListM = Backbone.Collection.extend({

    // Will hold objects of the TemplateModel model
    model: TemplateModel,

    // Return an array only with the checked TemplateModel
    //getChecked: function(){
       // return this.where({checked:true});
    //}
});



var templatess = new TemplateListM([

    
    new TemplateModel({ name: 'New Template'}),
 
   /* new TemplateModel({ name: 'photography'}),
    new TemplateModel({ name: 'coffee drinking'})*/
    // Add more here
]);

templateNames.forEach(function(element) {
    templatess.add(new TemplateModel({ name: element.name}));
    
  });
// This view turns a Service model into HTML. Will create LI elements.
var TemplateView = Backbone.View.extend({
    tagName: 'option',

  /*  events:{
        'change': 'findTemplate'
    },*/

    initialize: function(){

        // Set up event listeners. The change backbone event
        // is raised when a property changes (like the checked field)

        this.listenTo(this.model, 'change', this.render);
    },

    render: function(){

        // Create the HTML

        this.$el.html(this.model.get('name') );

        // Returning the object is a good practice
        // that makes chaining possible
        return this;
    },

    findTemplate: function(){
        name=this.$el.find('select').val();

    }
});

// The main view of the application
var App = Backbone.View.extend({

    // Base the view on an existing element
    el: $('#chooseProj'),
    events: {
        "change #templatesSelect": "findTemplate"
    },

    initialize: function(){

        // Cache these selectors
        //this.total = $('#total span');
        this.list = $('#templatesSelect');

        // Listen for the change event on the collection.
        // This is equivalent to listening on every one of the 
        // service objects in the collection.
        //this.listenTo(templatess, 'onchange', alert("jjj"));

        // Create views for every one of the services in the
        // collection and add them to the page

        templatess.each(function(elm){

            var view = new TemplateView({ model: elm });
            this.list.append(view.render().el);

        }, this);   // "this" is the context in the callback
    },
    findTemplate: function(){
       const name= this.$el.find('select').val();
       actualTemplate=getTemplate(name);
       if (actualTemplate==null || name!='New Template'){
            alert("dont have");
       }
      else if (name =='New Template'){
        var msg = new TemplateNew();
        msg.render().el;
        $(".newTemplateModal").trigger("click");
       


        
       }
      
       else{
        alert("loading.... "); 
        }
    },
    render: function(){

        // Calculate the total order amount by agregating
        // the prices of only the checked element

        return this;
    }
    
});

function getTemplate(name){
    if (templateNames==null || name=="" || name=="New Template"){
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


 // This view turns a Service model into HTML. Will create LI elements.
var TemplateView = Backbone.View.extend({
    tagName: 'option',

  /*  events:{
        'change': 'findTemplate'
    },*/

    initialize: function(){

        // Set up event listeners. The change backbone event
        // is raised when a property changes (like the checked field)

        this.listenTo(this.model, 'change', this.render);
    },

    render: function(){

        // Create the HTML

        this.$el.html(this.model.get('name') );

        // Returning the object is a good practice
        // that makes chaining possible
        return this;
    },

    findTemplate: function(){
        name=this.$el.find('select').val();

    }
});


 // This view turns a Service model into HTML. Will create LI elements.
 var TemplateNew = Backbone.View.extend({
    
    el: $('.newTmplateAddButton'),
  /*  events:{
        'change': 'findTemplate'
    },*/
    events: {
        "click button.blabla": "makeNewTemplate"
    },
    initialize: function(){

        // Set up event listeners. The change backbone event
        // is raised when a property changes (like the checked field)

        this.listenTo(this.model, 'change', this.render);
    },

    render: function(){

        // Create the HTML

        this.$el.html('<button type="button" class="btn btn-primary blabla">Save Template</button>');

        // Returning the object is a good practice
        // that makes chaining possible
        return this;
    },

    makeNewTemplate: function(){
     alert("bla")

    }
});


module.exports.App=App;
module.exports.getTemplate = getTemplate; 
module.exports.actualTemplate = actualTemplate;
module.exports.templateNames = templateNames;      