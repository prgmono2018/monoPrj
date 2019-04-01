import React, { Component } from 'react';
import '../style/ImageUpload.css';
import templates from "../common/Templates"


export default class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {file: '',imagePreviewUrl: '', visible:props.visible};
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    let obj={type:"image",name:this.state.file.name,file:this.state.file};
    templates.pushToActualTemplate(obj);
    console.log(templates.getActualTemplateArr());
    this.setState({file:''});
    //this.props.close.click();
    this.props.close.current.click();
    //console.log("dddd="+this.props.pushToActualemplate(obj))
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  render() {
    let visible= this.state.visible;
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return (
      <div className={`previewComponent ${visible}`} >
          <div className="fileSelectCont">
              <form onSubmit={(e)=>this._handleSubmit(e)}>
              <div className="imageFormInput">
                <input className="fileInput" 
                  type="file" 
                  onChange={(e)=>this._handleImageChange(e)} />
              </div>
              <div className="imageFormButton">
                <button className="submitButton" 
                  type="submit" 
                  onClick={(e)=>this._handleSubmit(e)}>Save Picure</button>
            </div>
            </form>
          </div>
        <div className="imgPreview">
          {$imagePreview}
        </div>
      </div>
    )
  }
}
  
