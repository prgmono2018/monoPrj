import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as configSelector from '../js/reducers/cmsReducer';
import {getItems} from "../js/actions/index";
import UploaderPanel from './uploaders/UploaderPanel'
import ImageAnimation from './ImageAnimation'
import {Container,Image} from './spriteRender/spriteConsts'
import SpriteRenderer from './spriteRender/SpriteRenderer'
import { SSL_OP_PKCS1_CHECK_1 } from 'constants';
import sideAnimation from "./images/sprite/sp4.png";
import Spritesheet from 'react-responsive-spritesheet';

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
   //const images=[require('./images/1.jpg'),require('./images/1.png'),require('./images/2.jpg'),require('./images/2.png'),require('./images/4.png')]
   const images=['./images/1.jpg','./images/1.png','./images/2.jpg','./images/2.png','./images/4.png'];
   const imgPath='./images/sprite/sp1.png';

  const imgSrc=require(`${imgPath}`)
    return (
    /*  <div>
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
     <ImageAnimation/>
        <SpriteRenderer
    src={sideAnimation}
    states={4}
    tile={{ width: 271, height: 320 }}
    scale={2}
    framesPerStep={8}
  />
    </div>*/
    <div>
    <ImageAnimation images={images}/>
    <Spritesheet
        image={imgSrc}
        widthFrame={256}
        heightFrame={256}
        steps={6}
        fps={12}
        loop={true}
      />
 
 <SpriteRenderer
    src={imgSrc}
    states={6}
    tile={{ width: 256, height: 256 }}
    scale={1}
    framesPerStep={8}
  />

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