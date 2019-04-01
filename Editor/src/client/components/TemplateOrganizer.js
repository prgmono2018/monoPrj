import React, { Component } from 'react';
import '../style/app.css';
import templates from "../common/Templates"
import NewTemplate from "./NewTemplate"
import axios from "axios"


export default class TemplateOrganizer extends Component {
  constructor(props) {
    super(props);
       this.state = {
       allTemplates:"",
       newTemplateInput:props.showNewTemplate,
     };
   
this.getTemplateList=this.getTemplateList.bind(this);
this.NewTemplate=this.NewTemplate.bind(this);
  }

getTemplateList(){
  console.log("updated items")
  axios.get("http://localhost:8080/getTempList")
  .then(
    
    json => {
          this.setState({ allTemplates: json.data })
    }
  ).catch(error => {
   
      console.log('error code=', error.response.status);
      console.log('errorType', typeof error);
      console.log('error', Object.assign({}, error));
      console.log('getOwnPropertyNames', Object.getOwnPropertyNames(error));
      console.log('stackProperty', Object.getOwnPropertyDescriptor(error, 'stack'));
      console.log('messageProperty', Object.getOwnPropertyDescriptor(error, 'message'));
      console.log('stackEnumerable', error.propertyIsEnumerable('stack'));
      console.log('messageEnumerable', error.propertyIsEnumerable('message'));
      switch (error.response.status) {
        case 401:
        this.props.history.push('/c');
          break
        case 'invalid_attributes':
          dispatch(PasswordUpdateFailure('Fields must not be blank'))
          break
      }
    })
 this.setState({allTemplates: templates.getListTemplatesFromServer()}) ;
}
  componentDidMount() {
    console.log("templates org did mount");
      this.getTemplateList();
  }

 
  NewTemplate(e){
    console.log(e)
    this.setState({newTemplateInput:!this.state.newTemplateInput});

  }
  render() {

  const templates=this.state.allTemplates;
    return (
            <div>
               <div className={(!this.state.newTemplateInput)?'showElement':'hideElement'}>
                    <select className="form-control">
          
                    {
                      (templates!="" && templates!='undefined' && templates!=undefined)?(
                      this.state.allTemplates.map(function(template){
                      return <option value={template}>{template}</option>;
                    })
                      ):""
                    }

                    </select>
                    <button   type="button" onClick={this.NewTemplate} className="btn btn-primary">Make New Template</button>
                </div>
               
                <NewTemplate visible={this.state.newTemplateInput} close={this.props.close}/>
            </div> 
           
 
    );
  }
}
