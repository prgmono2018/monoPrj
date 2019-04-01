import React, { Component } from 'react';
import '../style/app.css';
import templates from "../common/Templates"
import axios from "axios"


export default class TemplateOrganizer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      templateName:"",
      };
    this.closeButton=this.props.close;
    this.makeNewTemplate=this.makeNewTemplate.bind(this);
    this.handleChange=this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({templateName: event.target.value});
  }

  makeNewTemplate(e){
      templates.setActualTemplate({name:this.state.templateName,obj:[]});
      this.closeButton.current.click();
  }

  render() {

    const visible=this.props.visible;
    return (
            <div className={visible?'showElement':'hideElement'}>
                       <label>
                            Enter template name: <input value={this.state.templateName} onChange={this.handleChange} type="text" name="name" />
                       </label>
                       <button type="button" onClick={this.makeNewTemplate} className="btn btn-primary">save</button>
         
            </div> 
           
 
    );
  }
}
