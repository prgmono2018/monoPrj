import React from 'react'
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button';
import ImagePrev from "./ImagePrev";
import MoviePrev from "./MoviePrev";
//import FileInput  from 'react-file-input';
import PatchEvent, {set, unset} from 'part:@sanity/form-builder/patch-event'
import styles from '../css/wrapper.css'
import axios from 'axios';
const createPatchFrom = value => PatchEvent.from(value === '' ? unset() : set(String(value)))
const AWS = require('aws-sdk/dist/aws-sdk-react-native');
const BUCKET_NAME = 'prj.releases';
const IAM_USER_KEY = 'AKIAI4SY3RJNRALPQXOA';
const IAM_USER_SECRET = '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';


export default class ImageVidView extends React.Component {
  
  constructor(props) {

    super(props);

    this.state = {
      showAdd:false,
      newUrl:this.props.value,
      newName:"",
      selectedFile:null,
      loaded:0
  };  
    this.handleImage = this.handleImage.bind(this);
    this.handleSelectedFile = this.handleSelectedFile.bind(this);
   
}


async  uploadFileToS3 (file,name) {
  AWS.config.region="eu-central-1";
  let s3bucket = new AWS.S3({
    accessKeyId: IAM_USER_KEY,
    secretAccessKey: IAM_USER_SECRET,
    Bucket: BUCKET_NAME,
  });


  var params = {
    Bucket: BUCKET_NAME,//Here
    Key: name,
    Body: file,
    ContentType:file.type
   };
  const uploadResult = await s3bucket.upload(params).promise()
  console.log(uploadResult);
  this.setState({
    newUrl: uploadResult.Location,
  })
  const {onChange} = this.props
  onChange(createPatchFrom(uploadResult.Location))
}

handleSelectedFile = event => {
  //console.log(">>>>>>>handleSelectedFile>>>>>>>>>>>")
  this.setState({
    selectedFile: event.target.files[0],
    loaded: 0,
  })

  let fileName = event.target.files[0].name;
  this.uploadFileToS3 (event.target.files[0],fileName);
  

}


handleImage(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  // this is called by the form builder whenever this input should receive focus
  focus() {
    this._inputElement.focus()
  }

  render() {
    let size=20;
    const {type, onChange} = this.props
    let value=this.state.newUrl;
    if (!(typeof(value)=='undefined' || value===null)){
     size=value.length;
     if (size>70){
       size=70;
     }
    }
    //const {min, max, step} = type.options.range
    let {newName,newUrl}= this.state;
    //console.log(">>>>> cont-! newUrl="+newUrl+" newName="+newName+" Type="+type +"value= "+value);
    return (
      <div>
        <h4>{type.title}</h4>
        <input
          type="text"
          size={size}
          value={value === undefined ? '' : value}
          onChange={(event)=>{ this.setState({ newUrl: event.target.value });  onChange(createPatchFrom(event.target.value))} }
          ref={element => this._inputElement = element}
        />
        <div>



          <span className={[styles.btn,styles.btnfile,styles.btnp].join(' ')}>
        Browse<input className={[styles.btnfileIn].join(' ')} type="file" name="" id="" onChange={this.handleSelectedFile} />
        </span>


        
        <ImagePrev imageUrl={this.state.newUrl}/>
        <MoviePrev movUrl={this.state.newUrl}/>



        </div>
      </div>
      
    )
  }
}