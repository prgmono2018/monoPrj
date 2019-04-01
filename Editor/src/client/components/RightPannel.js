import React, { Component } from "react";

import '../style/app.css';
//import Slider from "./Slider.js";
//import axios from 'axios';

import {Navbar} from 'react-bootstrap';
import {Nav,NavDropdown} from 'react-bootstrap';
import Item from "./Item";

class RightPannel extends React.Component {

    constructor(props) {
        super(props);
           this.state = {
           draggables:[],
           visible:true
         };
    
      }

       componentDidMount() {
        console.log("did mount");
 
   
      }

    updatePanelData(){
      


    }
    render() {
   
        return (
          <div className="rightContainer">
              <div className="innerRightContainer">
              <ul className="nav navbar-nav side-nav">
              
                  <li>
                    <Item icon="fa fa-sitemap" iconId="sitemap"/>
                    <Item icon="fa fa-stream" iconId="stream"/>
                    <Item icon="fa fa-radiation" iconId="radiation"/>
                    <Item icon="fa fa-exclamation" iconId="exclamation"/>
                    <Item icon="fa fa-skull-crossbones" iconId="skull-crossbones"/>
                    <Item icon="fa fa-dice-d6" iconId="dice-d6"/>
                  </li>
                
                  <li>
                      <Item icon="fa fa-adjust" iconId="brackets"/>
                  </li>
              </ul>
          </div>
      </div>     
        );
    }
}

export default RightPannel;