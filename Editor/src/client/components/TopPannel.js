import React, { Component } from "react";

import '../style/app.css';
//import Slider from "./Slider.js";
//import axios from 'axios';
import { saveAs } from 'file-saver';
import {Navbar} from 'react-bootstrap';
import {Nav,NavDropdown} from 'react-bootstrap';
import Item from "./Item";
import templates from "../common/Templates";
import axios from 'axios';

class TopPannel extends React.Component {

    constructor(props) {
        super(props);
           this.state = {
           draggables:[],
           visible:true
         };
         this.saveTemplate = this.saveTemplate.bind(this);
         this.templateToSave="blaaaaaaaaaaaaaa";
      }

       componentDidMount() {
        console.log("TopPannel did mount");
      }

      saveTemplate(e){
  
        const url = 'http://localhost:8080/saveTemplate';
        const formData = new FormData();
        templates.preapareDataForm(formData);

        return axios.request({
          url: 'http://localhost:8080/saveTemplate',
          method: 'POST',
          headers: { 'content-type': 'multipart/form-data' },
          data: formData
        })

      }
    render() {
   
        return (
          <div>
          <Navbar bg="light" expand="lg" className="topFileMenu">
          <Navbar.Brand href="#home">Editor</Navbar.Brand>
          <NavDropdown title="File"  id="nav-dropdown" >
              <NavDropdown.Item  onClick={(e)=>this.saveTemplate()} eventKey="4.1">save</NavDropdown.Item>
              <NavDropdown.Item  onClick={(e)=>this.props.showModal()} eventKey="4.2">Save as ...</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">
                Something else here
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
         </NavDropdown>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
               <Nav.Link href="#link"><Item icon="fa fa-adjust" iconId="brackets"/></Nav.Link>
              <Nav.Link href="#link"><Item icon="fa fa-hashtag" iconId="brackets"/></Nav.Link>
              <Nav.Link href="#link"><Item icon="fas fa-check" iconId="brackets"/></Nav.Link>
              <Nav.Link href="#link"><Item icon="fas fa-cut" iconId="brackets"/></Nav.Link>

              <Nav.Link href="#link"><Item icon="fas fa-file-image" iconId="imageUpload"/></Nav.Link>
              <Nav.Link href="#link"><Item icon="fas fa-file-video" iconId="brackets"/></Nav.Link>
              <Nav.Link href="#link"><Item icon="fas fa-save" iconId="brackets"/></Nav.Link>
              <Nav.Link href="#link"><Item icon="fas fa-clone" iconId="brackets"/></Nav.Link>
              <Nav.Link href="#link"><Item icon="fas fa-filter" iconId="brackets"/></Nav.Link>
              <Nav.Link href="#link"><Item icon="fas fa-code-branch" iconId="brackets"/></Nav.Link>

              <Nav.Link href="#link"><Item icon="fas fa-brackets-curly" iconId="brackets"/></Nav.Link>
              <Nav.Link href="#link"><Item icon="fas fa-brackets-curly" iconId="brackets"/></Nav.Link>
              <Nav.Link href="#link"><Item icon="fas fa-brackets-curly" iconId="brackets"/></Nav.Link>
              <Nav.Link href="#link"><Item icon="fas fa-brackets-curly" iconId="brackets"/></Nav.Link>
              <Nav.Link href="#link"><Item icon="fas fa-brackets-curly" iconId="brackets"/></Nav.Link>
              <Nav.Link href="#link"><Item icon="fas fa-brackets-curly" iconId="brackets"/></Nav.Link>
              <Nav.Link href="#link"><Item icon="fas fa-brackets-curly" iconId="brackets"/></Nav.Link>
              <Nav.Link href="#link"><Item icon="fas fa-brackets-curly" iconId="brackets"/></Nav.Link>
              <Nav.Link href="#link"><Item icon="fas fa-brackets-curly" iconId="brackets"/></Nav.Link>
              <Nav.Link href="#link"><Item icon="fas fa-brackets-curly" iconId="brackets"/></Nav.Link>
            </Nav>
           
          </Navbar.Collapse>
        </Navbar>
    </div>
               
        );
    }
}

export default TopPannel;