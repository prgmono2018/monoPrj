import { isString } from 'underscore';
var $ = require('jQuery');
var ComponentView = require('../ComponentView');

module.exports = ComponentView.extend({
  tagName: 'img',

  events: {
    dblclick: 'onActive',
    click: 'initResize',
  },
/*  init() {
    this.listenTo(this.model, 'active', alert("jjjj")); // listen for active event
  },*/
  initialize(o) {
    const model = this.model;
    ComponentView.prototype.initialize.apply(this, arguments);
    this.listenTo(model, 'change:src', this.updateSrc);
    this.classEmpty = `${this.ppfx}plh-image`;
    const config = this.config;
    config.modal && (this.modal = config.modal);
    config.am && (this.am = config.am);
    this.fetchFile();
   // this.listenTo(this, 'change:image', this.doStuff);
  },

  /**
   * Fetch file if exists
   */
  fetchFile() {
    const model = this.model;
    const file = model.get('file');

    if (file) {
     
      const fu = this.em.get('AssetManager').FileUploader();
      fu.uploadFile(
        {
          dataTransfer: { files: [file] }
        },
        res => {
          const obj = res && res.data && res.data[0];
          const src = obj && (isString(obj) ? obj : obj.src);
          src && model.set({ src });
        }
      );
      model.set('file', '');
    }
  },

  /**
   * Update src attribute
   * @private
   * */
  updateSrc() {
   
    const { model, classEmpty, $el } = this;
    const src = model.get('src');
    model.addAttributes({ src });
    $el[src ? 'removeClass' : 'addClass'](classEmpty);
   
    this.saveImage($el);
  },

  /**
   * Open dialog for image changing
   * @param  {Object}  e  Event
   * @private
   * */
  onActive(ev) {
    ev && ev.stopPropagation();
    var em = this.opts.config.em;
    var editor = em ? em.get('Editor') : '';

    if (editor && this.model.get('editable')) {
      editor.runCommand('open-assets', {
        target: this.model,
        types: ['image'],
        accept: 'image/*',
        onSelect() {
          editor.Modal.close();
          editor.AssetManager.setTarget(null);
        }
      });
    }
  },


    /**
   * Saves images
   * @private
   * */
  saveImage(el) {
    let name=$(".gjs-am-asset-image.gjs-am-highlight .gjs-am-meta .gjs-am-name").html();
    el.attr("name",name);
  },

  render() {
    this.renderAttributes();
    const { $el, model } = this;
    const cls = $el.attr('class') || '';
    !model.get('src') && $el.attr('class', `${cls} ${this.classEmpty}`.trim());
    // Avoid strange behaviours with drag and drop
    $el.attr('onmousedown', 'return false');
    this.postRender();

    return this;
  }
});
