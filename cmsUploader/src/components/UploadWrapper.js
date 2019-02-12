import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/wrapper.css';
import UploaderPanel from './uploaders/UploaderPanel'
import sendToS3 from './uploaders/sendFileToS3'
import axios from 'axios';
class UploadWrapper extends Component {

  render() {
    var myFiles=[];
    return (

      <UploaderPanel
        sizes="(min-width: 1000px) 50vw, 100vw"
        tab='url'
        settings={{multiple: true}}
        onOpen={panel => console.log('Panel opened', panel)}
        onDone={files => {
          console.log('>> Files choosed', files)
          
          files.map(file => {
            console.log('>> File changed: ', file)

            if (file) {
              
              file.progress((info)=>{ console.log('>> File progress: ', info.progress+"777="+info.incompleteFileInfo.originalUrl)
                
            })
              //info.name,info.originalUrl
              file.done(
                (info)=> {
                  console.log('>> File uploaded: ', info)
                  if (typeof(info.name)!='undefined' && info.name!=""){
                  let data={name:info.name,url:info.originalUrl};
                  myFiles.push(data)
                  
                  }
                }
                
                )
            }
          })
//Send the files to 
          let payload = {
            files:myFiles
          };
          
          axios({
            url: 'http://localhost:8000/uploadToS3',
            method: 'post',
            data: payload
          })
          .then(function (response) {
              // your action after success
              console.log(response);
          })
          .catch(function (error) {
             // your action on error success
              console.log(error);
          });
          window.location.reload();
        }
    
      
      } 
        onChange={(file) => {
          console.log('File changed: ', file)
    
          if (file) {
            file.progress(info => console.log('File progress: ', info.progress))
            file.done(info => console.log('File uploaded: ', info))
          }
        }}
        
        />
    );
  }
}




export default UploadWrapper;