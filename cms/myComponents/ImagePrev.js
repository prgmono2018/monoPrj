import React, { Component } from "react";

class ImagePrev extends React.Component {
    constructor(props) {
      super(props);
      console.log("const ImagePrev");
      this.state = 
      {
        file: '',
        imagePreviewUrl: this.props.imageUrl,
        fileType:["jpg","gif","png"],
        showComponent:false
      };
     // this.updateShowComponent();
      this.updateShowComponent = this.updateShowComponent.bind(this);
    }

    updateShowComponent()
    {
      let res=false;
      let url=this.props.imageUrl
      if (typeof(url)=='undefined' || url===null){
        url='';
      }
      this.state.fileType.forEach(function(value) {
      //console.log(value);
      //console.log("this.props.imageUrl="+this.props.imageUrl);
      //console.log(">>>>>1  url this.state.imagePreviewUrl="+this.props.imageUrl);
      if (url.toLowerCase().endsWith(value)){
        res=true;
      }
    }.bind(this));
      return res;
    }
    
componentDidMount(){
  //console.log(">>>>> this.state.imagePreviewUrl="+this.state.imagePreviewUrl);
  this.updateShowComponent();
}

    render() {
      
      let imagePreviewUrl = this.props.imageUrl;
      let $imagePreview = null;
      if (imagePreviewUrl) {
        $imagePreview = (<img width="600px" src={this.props.imageUrl} />);
      } else {
        $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
      }
  
      return (
        
        <div className="previewComponent" style={{display: this.updateShowComponent() ? 'block' : 'none' }}  >
 
          <div className="imgPreview">
            {$imagePreview}
          </div>

        </div>

        
      )
    }
  }
    
  export default ImagePrev;