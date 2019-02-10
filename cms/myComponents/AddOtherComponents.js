import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "../presentational/Input";
import ImagePrev from "./ImagePrev";
import MoviePrev from "./MoviePrev";
//import ImageSelector from "./ImageSelector";
class AddOtherComponents extends Component {
    constructor(props) {
      super(props);
      this.state = {
        showAdd:false,
        newUrl:"",
        newName:"",
        fileType:["mp4","ogv","ogg","ogg","m4a","jpg","gif","png","webm"],
        showPic:false,
        showVid:false
    };  
      this.handleChange = this.handleChange.bind(this);
      this.handleImage = this.handleImage.bind(this);
      this.toggleAddComponents = this.toggleAddComponents.bind(this);
      this.saveData = this.saveData.bind(this);
    }
    saveData(){
        this.setState({
            showAdd:false,
        });
        var data = {
            name:newName.value,
            url:newUrl.value
        };
        this.props.saveComponent(data);
    }
    toggleAddComponents() {
        this.setState({
            showAdd: !this.state.showAdd
        });
      }
    handleChange(event) {
      this.setState({ [event.target.id]: event.target.value });
    }
    handleImage(event) {
        this.setState({ [event.target.id]: event.target.value });
      }
    render() {
    let {newName,newUrl}= this.state;
    console.log(">>>>> newUrl="+newUrl+" newName="+newName);
      return (
      <div>
      
      <button onClick={()=> this.toggleAddComponents()}>Add more components</button>
      {
          this.state.showAdd ? 

              <div>
                <Input
                  type="text"
                  name={newName}
                  data-id={newName}
                  id="newName"
                  className="inputAddComp"
                  label={newName}
                  text="Input name"
                  handleChange={this.handleChange}
                  value={newName}
                />
                <Input
                  type="text"
                  name={newUrl}
                  data-id={newUrl}
                  id="newUrl"
                  className="inputAddComp"
                  text="Input url"
                  value={newUrl}
                  label={newUrl}
                  handleChange={this.handleImage}
                />
              
                <ImagePrev imageUrl={this.state.newUrl}/>
                <MoviePrev movUrl={this.state.newUrl}/>
                <button onClick={()=> this.saveData()}>save</button>
              </div>

     //     })
           : null
        }

       </div> 
      
      );
    }
  }
  
  export default AddOtherComponents;
  
  