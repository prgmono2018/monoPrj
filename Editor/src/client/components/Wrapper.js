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
       showNewTemplate:true,
       actualTemplate: templates.getActualTemplate()
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
  console.log("hh")
this.setState({showNewTemplate:false});
this.modalRefTemplate.current.modalButton.click();


}
  componentDidMount() {
       console.log("TopPannel did mount");
  }





  render() {
  /*  const { username } = this.state;*/
    return (
      <div id="mainCont">
            <div>
            <TopPannel showModal={this.showTemplateModalSave}/>
            </div>
            <ModalMsg showNewTemplate={this.state.showNewTemplate} visible={this.state.showTemplateModal} fakeId="chooseTemplate" title="Please choose template" ref={this.modalRefTemplate} component={TemplateOrganizer} getActualemplate={templates.getActualTemplate}  setActualemplate={templates.setActualTemplate} pushToActualemplate={templates.pushToActualTemplate}/>
            <div className="canvasPanelCont">
               <Canvas modalRef={this.modalRefImage} getActualemplate={this.getActualemplate } pushToActualemplate={this.pushToActualemplate } setActualemplate={this.setActualemplate}/><RightPannel/>
            </div> 
            <ModalMsg fakeId="chooseImage" title="Please choose image" ref={this.modalRefImage} visible={false} component={ImageUpload} getActualemplate={templates.getActualTemplate}  setActualemplate={templates.setActualTemplate} pushToActualemplate={templates.pushToActualTemplate}/>
      </div>
   
    );
  }
}
