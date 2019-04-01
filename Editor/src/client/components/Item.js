import React, { Component } from "react";
import '../style/app.css';


class Item extends React.Component {

    constructor(props) {
        super(props);
           this.state = {
           visible:true,
           //icon:props.icon,
           xpos:"0",
           ypos:"0",
           loc:"menu",
           command:""
         };
       this.icon=props.icon;
       this.iconId=props.iconId;
       this.onDragStart = this.onDragStart.bind(this);
       //this.handleStop = this.handleStop.bind(this);
      }
      onDragStart(e){
        e.dataTransfer.setData("text", e.target.id);
   
      }
  
       componentDidMount() {
       
   
      }

    render() {
   
        return (
               <i id={`ico${this.iconId}`} draggable onDrop={()=>this.handleStop()} onDragStart={(e)=>this.onDragStart(e)}  className={`itemContainer ${this.icon} fa-2x`}></i>          
        );
    }
}

export default Item;