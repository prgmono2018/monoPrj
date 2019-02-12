import React, { Component } from 'react';
import Wrapper from './Wrapper';
import UploadWrapper from './UploadWrapper';
//import './App.css';
//import * as reducers from '../js/reducers';
class App extends Component {
  
  render() {
    return (
      <div className="App">
        <UploadWrapper/>
      </div>
    );
  }
}

export default App;