import React, { Component } from 'react';
import { connect } from 'react-redux';
import UploaderPanel from './uploaders/UploaderPanel'
import sendToS3 from './uploaders/sendFileToS3'
import axios from 'axios';
import ErrorPage from './pages/ErrorPage';
import UploadDone from './pages/UploadDone';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import ImageAnimation from './ImageAnimation'

class UploadWrapper extends Component {
  constructor() {
    super();
    this.state = {
      redir: false
    };
 
  }
  render() {
    var myFiles=[];
    console.log(`Your port is ${FILE_SAVE_PORT}`); // 8626
    let { redir } = this.state;
    return (
 
      <div>
          {redir ? <Redirect to="/ErrorPage" /> : ''}
          {redir ? 'true' : 'false'}
         
      <Router>
               <Route path='/done' component={UploadDone} />
      </Router>
      <h1>File Upload</h1>
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
            url: `http://${FILE_SAVE_ADDRESS}:${FILE_SAVE_PORT}/uploadToS3`,
            method: 'post',
            data: payload
          })
          .then(function (response) {
              // your action after success
              console.log(response);
          })
          .catch( (error) =>{
             // your action on error success
              console.log(error);
              this.setState({ redir: true});
          });
          //window.location.reload();
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
    
        </div>
    );
  }
}




export default UploadWrapper;