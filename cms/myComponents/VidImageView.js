import React from 'react'
import PropTypes from 'prop-types'
import Input from "./presentational/Input";
import ImagePrev from "./ImagePrev";
import MoviePrev from "./MoviePrev";
import PatchEvent, {set, unset} from 'part:@sanity/form-builder/patch-event'

const createPatchFrom = value => PatchEvent.from(value === '' ? unset() : set(String(value)))

export default class Slider extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      showAdd:false,
      newUrl:"",
      newName:"",
      fileType:["mp4","ogv","ogg","ogg","m4a","jpg","gif","png","webm"],
      showPic:false,
      showVid:false
  };  
    this.handleImage = this.handleImage.bind(this);
    this.toggleAddComponents = this.toggleAddComponents.bind(this);
    this.saveData = this.saveData.bind(this);
  }

  saveData(){
    this.setState({
        showAdd:false,
    });
    var data = {
        name:newName.value,
        url:newUrl.value
    };
    this.props.saveComponent(data);
}
toggleAddComponents() {
  console.log("toggleAddComponents")
    this.setState({
        showAdd: !this.state.showAdd
    });
  }
/*handleChange(event) {
  this.setState({ [event.target.id]: event.target.value });
  console.log("bla=")
}*/
handleImage(event) {
    this.setState({ [event.target.id]: event.target.value });
  }




  // this is called by the form builder whenever this input should receive focus
  focus() {
    this._inputElement.focus()
  }

  render() {
    const {type, value, onChange} = this.props
    //const {min, max, step} = type.options.range

    return (
      <div>
        <h2>{type.title}</h2>
        <input
          type="text"
          value={value === undefined ? '' : value}
          onChange={(event)=>{ this.setState({ newUrl: event.target.value }); console.log("gggg-"+event.target.value); onChange(createPatchFrom(event.target.value))} }
          ref={element => this._inputElement = element}
        />
        <div>

        <ImagePrev imageUrl={this.state.newUrl}/>
        
        
        <MoviePrev movUrl={this.state.newUrl}/>





        </div>
      </div>
      
    )
  }
}