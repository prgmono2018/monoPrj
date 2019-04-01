import * as data from 'editor/editorCustomData'
import * as activeTemplate from 'editor/saveTemplate'
import { tmpdir } from 'os';
const $ = Backbone.$;

module.exports = Backbone.View.extend({
  initialize() {
    const { model } = this;

    model.view = this;
    this.conf = model.config;
    this.pn = model.get('Panels');
    model.on('loaded', () => {
      this.pn.active();
      this.pn.disableButtons();
      model.runDefault();
      setTimeout(() => model.trigger('load', model.get('Editor')));
    });
  },

  render() {
    const model = this.model;
    var chooseProject = "<h1>Please choose your project</h1>"
    const el = this.$el;
    const conf = this.conf;
    const contEl = $(conf.el || `body ${conf.container}`);
    const pfx = conf.stylePrefix;
    const  temp= activeTemplate.actualTemplate;
    el.empty();
    if (temp.getName()=='newTemplate'){
      contEl.html(data.buildTemplateSelectBox());
      $("button").trigger( "click" );

    }else{
    if (conf.width) contEl.css('width', conf.width);

    if (conf.height) contEl.css('height', conf.height);

    el.append(model.get('Canvas').render());
    el.append(this.pn.render());
    el.attr('class', `${pfx}editor ${pfx}one-bg ${pfx}two-color`);
    contEl
      .addClass(`${pfx}editor-cont`)
      .empty()
     .append(el);
   }
    return this;
  }
});
