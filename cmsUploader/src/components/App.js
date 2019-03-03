import React, { Component } from 'react';
import Wrapper from './Wrapper';
import UploadWrapper from './UploadWrapper';
import ErrorPage from './pages/ErrorPage';
import UploadDone from './pages/UploadDone';
//import Anim from './Anim';
//import './App.css';
//import * as reducers from '../js/reducers';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
class App extends Component {
  
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
                  <Route exact path='/' component={UploadWrapper} />
                  <Route path='/error' component={ErrorPage} />
                  <Route path='/done' component={UploadDone} />
                  <Route path='*' component={ErrorPage} />
          </Switch>
        </div>
      </Router>
  
    );
  }
}

export default App;