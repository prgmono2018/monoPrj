import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/wrapper.css';
import * as configSelector from '../js/reducers/cmsReducer';
import {getItems} from "../js/actions/index";
import UploaderPanel from './uploaders/UploaderPanel'
class Wrapper extends Component {

    componentDidMount(){
        console.log(">> componentDidMount");
        const items=["ggg","hhh"]
        this.props.getData(items);
    }

  /*  getAllItems() {
        console.log("was here")
        return async(dispatch, getState) => {
          try {
            const items =["bla","lllaaa","aaa"];
            dispatch({ type: GET_ALL_ITEMS, items });
          } catch (error) {
            console.error(error);
          }
        };
      }*/
  sendFileTos3(){


  }

  render() {
   
    return (
      <div>>
      <h2>Where are my topics? 55{this.props.getAllConfig}55666{this.props.getOneConfig}666</h2>
      <div style={{max: '1200px'}}>
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
             /* var fs = require('fs');
              fs.writeFile('m111.jpg', info.incompleteFileInfo.sourceInfo.file, function (err) {
                if (err) throw err;
                console.log('Replaced!');
              });*/
              //sendToS3(info.incompleteFileInfo.sourceInfo.file);
            
            })
              
              file.done(info => console.log('>> File uploaded: ', info))
            }
          })
        }} 
        onChange={(file) => {
          console.log('File changed: ', file)
    
          if (file) {
            file.progress(info => console.log('File progress: ', info.progress))
            file.done(info => console.log('File uploaded: ', info))
          }
        }}
        
        />
    </div>
    </div>
    );
  }
}
// which props do we want to inject, given the global store state?

function mapStateToProps(state) {
    return {
        getOneConfig: configSelector.getOneItem(state),
        getAllConfig: configSelector.getAllItems(state)
    };
  } 
  
/*  function mapDispatchToProps(dispatch) {
    return {
      getData: (items) => dispatch(getItems(items))
    }
  }*/

  const mapDispatchToProps = dispatch => ({
    getData: () => dispatch(getItems()),
    //deleteMessage: id => dispatch(deleteMessage(id)),
  })
  


export default connect(mapStateToProps,mapDispatchToProps)(Wrapper);