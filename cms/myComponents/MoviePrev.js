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
   
    }

    updateShowComponent()
    {
      let res=false;
      this.state.fileType.forEach(function(value) {
      //console.log(value);
      if (this.props.movUrl.toLowerCase().endsWith(value)){
        res=true;
      }
    }.bind(this));
      return res;
    }
    render() {
        return (
          <div>
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