import React, { Component } from "react";

import Swrapper from "./Swrapper";

class App extends React.Component  {
  
  constructor(props){
    super(props);

  }
  
  render() {

    return (
      
        <div id="blabla">
           <Swrapper spineAnim={{name:"test",json:process.env.REACT_APP_DIR_JSON_PATH,atlas:process.env.REACT_APP_ATLAS_PATH}}/>
           <Swrapper spineAnim={{name:"test1",json:process.env.REACT_APP_DIR_JSON_PATH,atlas:process.env.REACT_APP_ATLAS_PATH}}/>
           <Swrapper spineAnim={{name:"test2",json:process.env.REACT_APP_DIR_JSON_PATH,atlas:process.env.REACT_APP_ATLAS_PATH}}/>
           <Swrapper spineAnim={{name:"test4",json:process.env.REACT_APP_DIR_JSON_PATH,atlas:process.env.REACT_APP_ATLAS_PATH}}/>

        </div>
 
  
    );
  }
}

export default App;