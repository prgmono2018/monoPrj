import React from 'react'
import ImagePrev from "./ImagePrev";
import MoviePrev from "./MoviePrev";
var arrayBufferToBuffer = require('arraybuffer-to-buffer');
const fileToArrayBuffer = require('file-to-array-buffer')
import PatchEvent, {set, unset} from 'part:@sanity/form-builder/patch-event'
import styles from '../css/wrapper.css'
import uploadFile from './custom/awsMultipartUpload'
import axios from 'axios';
const createPatchFrom = value => PatchEvent.from(value === '' ? unset() : set(String(value)))
const AWS = require('aws-sdk/dist/aws-sdk-react-native');
const BUCKET_NAME = 'prj.releases';
const IAM_USER_KEY = 'AKIAI4SY3RJNRALPQXOA';
const IAM_USER_SECRET = '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';
import spinner from './img/Loading_icon.gif';

export default class ImageVidView extends React.Component {
  
  constructor(props) {

    super(props);

    this.state = {
      showAdd:false,
      newUrl:this.props.value,
      newName:"",
      selectedFile:null,
      loading:false
  };  
    this.handleImage = this.handleImage.bind(this);
    this.handleSelectedFile = this.handleSelectedFile.bind(this);
    this.updateInputs = this.updateInputs.bind(this);
    this.uploadFileToS3 = this.uploadFileToS3.bind(this);
}


updateInputs(data){
  if (typeof(data)!='undefined'){
      console.log(data);
      console.log("After Upload: "+data);
      this.setState({
        newUrl: data.Location,
      })
      const {onChange} = this.props
      onChange(createPatchFrom(data.Location))
      }
}

  uploadFileToS3 (file,name) {
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
   
   fileToArrayBuffer(file).then((fileData) =>  {
    var buffer = arrayBufferToBuffer(fileData);
    this.setState({
      loading:true,
    })
     uploadFile(buffer, file.name,file.type, function(data){ 
       
      if (typeof(data)!='undefined'){
        console.log(data);
        console.log("After Upload: "+data);
        const {onChange} = this.props
        onChange(createPatchFrom(data.Location))
        this.setState({
          newUrl: data.Location,
          loading:false,
        });
     
        }
     }.bind(this)/*this.updateInputs()*/ );

   });
  
}

handleSelectedFile = event => {
  //console.log(">>>>>>>handleSelectedFile>>>>>>>>>>>")
  this.setState({
    selectedFile: event.target.files[0],
    loaded: 0,
  })

  let fileName = event.target.files[0].name;
  var reader  = new FileReader();
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
    let showSpinner=this.state.loading;
    const {type, onChange} = this.props
    let value=this.state.newUrl;
    if (!(typeof(value)=='undefined' || value===null)){
     size=value.length;
     if (size>70){
       size=70;
     }
    }
    //console.log(">>>>> cont-! newUrl="+newUrl+" newName="+newName+" Type="+type +"value= "+value);
    if (!showSpinner){
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
    else{
      return (<img  className={[styles.spinner]} src={spinner} alt='loading....' />)
    }
  }
}