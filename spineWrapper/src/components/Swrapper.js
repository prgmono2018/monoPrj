import React, { Component } from "react";


class Swrapper extends React.Component  {
  
  constructor(props){
    super(props);

    if (!document.getElementById(this.props.spineAnim.name)){
      var node = document.createElement("DIV");   
      node.setAttribute("id", this.props.spineAnim.name);              // Create a <div> node
      document.body.appendChild(node);
    }
  }

  render() {

    new spine.SpinePlayer(this.props.spineAnim.name, {
    jsonUrl: this.props.spineAnim.json,
    atlasUrl: this.props.spineAnim.atlas,
    showControls: false,
    premultipliedAlpha: true,
    defaultMix: 0.1,
    animation: "walk",
    alpha: true, // Enable player translucency
      backgroundColor: "#00000000" // Background is fully transparent
  });
    return (
      
        <div>
           
        </div>

    );
  }
}

export default Swrapper;