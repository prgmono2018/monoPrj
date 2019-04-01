import React, { Component } from "react";
import '../style/app.css';
import Action from "../common/actions";
import templates from "../common/Templates";

class Canvas extends React.Component {

    constructor(props) {
        super(props);
           this.state = {
           visible:true
         };
         this.onDrop = this.onDrop.bind(this);
         this.onDragOver = this.onDragOver.bind(this);
         this.modalRef=props.modalRef;
      }

      onDrop(e,bla){
        e.preventDefault();
        var data = e.dataTransfer.getData("text");
        ///e.currentTarget.appendChild(document.getElementById(data));
        Action.processItem(data,this.modalRef);

      }
      onDragOver(e){
        e.preventDefault();
        //alert("over");

      }
       componentDidMount() {
  
      }

    render() {
   
        return (
              <div className="canvasWrapper"><div  onDragOver={(e)=>this.onDragOver(e)} onDrop={(e)=>this.onDrop(e, "complete")} className="canvasContainer droppable"></div></div>               
        );
    }
}

export default Canvas;