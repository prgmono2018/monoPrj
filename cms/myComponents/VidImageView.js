import React from 'react'
import PropTypes from 'prop-types'
import Input from "./presentational/Input";
import ImagePrev from "./ImagePrev";
import MoviePrev from "./MoviePrev";
import PatchEvent, {set, unset} from 'part:@sanity/form-builder/patch-event'

const createPatchFrom = value => PatchEvent.from(value === '' ? unset() : set(String(value)))

export default class ImageVidView extends React.Component {
  
  constructor(props) {

    super(props);

    this.state = {
      showAdd:false,
      newUrl:this.props.value,
      newName:"",
      //fileType:["mp4","ogv","ogg","ogg","m4a","jpg","gif","png","webm"],
      //showPic:false,
     // showVid:false
     
  };  
    this.handleImage = this.handleImage.bind(this);
    //this.toggleAddComponents = this.toggleAddComponents.bind(this);
   // this.saveData = this.saveData.bind(this);
 

  /* saveData(){
    this.setState({
        showAdd:false,
    });
   var data = {
        name:newName.value,
        url:newUrl.value
    };*/
    //this.props.saveComponent(data);
}
/*toggleAddComponents() {
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
    let size=20;
    const {type, value, onChange} = this.props
    if (!(typeof(value)=='undefined' || value===null)){
     size=value.length;
     if (size>70){
       size=70;
     }
    }
    //const {min, max, step} = type.options.range
    let {newName,newUrl}= this.state;
    console.log(">>>>> cont-! newUrl="+newUrl+" newName="+newName+" Type="+type +"value= "+value);
    return (
      <div>
        <h4>{type.title}</h4>
        <input
          type="text"
          size={size}
          value={value === undefined ? '' : value}
          onChange={(event)=>{ console.log("gggg-"+event.target.value); this.setState({ newUrl: event.target.value });  onChange(createPatchFrom(event.target.value))} }
          ref={element => this._inputElement = element}
        />
        <div>

        <ImagePrev imageUrl={value}/>
        
        
        <MoviePrev movUrl={value}/>





        </div>
      </div>
      
    )
  }
}