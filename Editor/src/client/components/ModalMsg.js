import React, { Component } from 'react';
import '../style/modal.css';
import TopPannel from "./TopPannel";
import RightPannel from "./RightPannel";
import Canvas from "./Canvas";
import ImageUpload from "./ImagePicker";

export default class ModalMsg extends Component {
  constructor(props) {
    super(props);
       this.state = {
       visible:props.visible,
       compVisible:props.showNewTemplate,
       component:props.component,
       templates:[]
     };
     // this.actualTemplate=[];
     this.modalButton=null;
     this.closeButton=React.createRef();//goes to the component
    //  this.setActualemplate = this.setActualemplate.bind(this);
      //this.saveTemplate = this.saveTemplate.bind(this);
  }

  showComponent(Component){

    return  <Component pushToActualemplate={this.props.pushToActualemplate } setActualemplate={this.props.setActualemplate} visible={this.state.compVisible} modal={this.modalButton} close={this.closeButton}/>;

} 
  
  setActualemplate(template){
   // this.actualTemplate=template;
  }

  readTemplates(template){
    // this.actualTemplate=template;
   }

  componentDidMount(){
    if (this.state.visible){

      this.modalButton.click();
    }
  }
  render() {
  /*  const { username } = this.state;*/
 
    return (
      
      <div id="mainCont">
        
<button type="button" ref={input => this.modalButton = input} className="btn btn-primary hideElement" data-toggle="modal" data-target={`#${this.props.fakeId}`}>
  {this.props.title}
</button>

<div className="modal fade" id={`${this.props.fakeId}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
  aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content bodyContentChange">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">  {this.props.title}</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body customBody">
     {this.showComponent(this.state.component)}
      </div>
      <div className="modal-footer">
        <button type="button" ref={this.closeButton} className="btn btn-secondary" data-dismiss="modal">Close</button>
       {/* <button type="button" className="btn btn-primary">Save changes</button>*/}
      </div>
    </div>
  </div>
</div>
  
      </div>
   
    );
  //alert("gg")
  }
}
