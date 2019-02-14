import React from 'react';
import ReactPlayer from 'react-player';
//import '../css/video-react.css'
class MoviePrev extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        file: '',
        movUrl: this.props.movUrl,
        fileType:["mp4","ogv","webm"],
        showComponent:false
      };
   
      this.updateShowComponent = this.updateShowComponent.bind(this);
    }

    updateShowComponent()
    {
      let res=false;
      let url=this.props.movUrl;
      //console.log("movvvvvvvvvvvvvvv=>"+url)
      //console.log("this.props.value="+url);
      //console.log(">>>>>1  url this.state.movUrl="+this.props.movUrl);
      if (typeof(url)=='undefined' || url===null){
        url='';
      }
      this.state.fileType.forEach(function(value) {
      //console.log(value);
      if (url.toLowerCase().endsWith(value)){
        res=true;
      }
    }.bind(this));
      return res;
    }
    render() {
        return (
          <div style={{display: this.updateShowComponent() ? 'block' : 'none' }}>
          <ReactPlayer
            url={this.props.movUrl}
            className='react-player'
            playing
            width='100%'
            height='100%'
          />
        </div>
          );
    }
  }
    
  export default MoviePrev;