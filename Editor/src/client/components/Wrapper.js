import React, { Component } from 'react';
import '../style/app.css';
import TopPannel from "./TopPannel";
import RightPannel from "./RightPannel";
import Canvas from "./Canvas";
import ModalMsg from "./ModalMsg"
import ImageUpload from "./ImagePicker";
import TemplateOrganizer from "./TemplateOrganizer"
import templates from "../common/Templates"

 
export default class Wrapper extends Component {
  constructor(props) {
    super(props);
       this.state = {
       showTemplateModal:true,
       imageSelector:'hideElement',
       actualTemplate: templates.getActualTemplate(),
       showSelectTemplate:true
     };
      //this.actualTemplate=[];

      //this.setActualemplate = this.setActualemplate.bind(this);
      //this.saveTemplate = this.saveTemplate.bind(this);
       this.modalRefImage = React.createRef();
       this.canvasRef = React.createRef();
       this.modalRefTemplate=React.createRef();
       //this.pushToActualemplate = this.pushToActualemplate.bind(this);
       this.showTemplateModalSave = this.showTemplateModalSave.bind(this);
  }

showTemplateModalSave(){
  
this.setState({showSelectTemplate:false},()=>{this.modalRefTemplate.current.modalButton.click()});
}
  componentDidMount() {
       console.log("Wapper did mount");
  }





  render() {
  /*  const { username } = this.state;*/
    return (
      <div id="mainCont">
            <div>
            <TopPannel showModal={this.showTemplateModalSave}/>
            </div>
            <ModalMsg showSelectTemplate={this.state.showSelectTemplate} visible={this.state.showTemplateModal} fakeId="chooseTemplate" title="Please choose template" ref={this.modalRefTemplate} component={TemplateOrganizer}/>
            <div className="canvasPanelCont">
               <Canvas modalRef={this.modalRefImage} getActualemplate={this.getActualemplate } pushToActualemplate={this.pushToActualemplate } setActualemplate={this.setActualemplate}/><RightPannel/>
            </div> 
            <ModalMsg fakeId="chooseImage" title="Please choose image" ref={this.modalRefImage} visible={false} component={ImageUpload} />
      </div>
   
    );
  }
}
