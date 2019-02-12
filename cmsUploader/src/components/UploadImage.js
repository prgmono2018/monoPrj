import React, { Component } from "react";
import { render } from "react-dom";

import ReactDropzone from "react-dropzone";
import request from "superagent";

class App1 extends Component {
  onDrop = (files) => {
    // POST to a test endpoint for demo purposes
    const req = request.post('https://httpbin.org/post');
console.log("files="+files);
    files.forEach(file => {
      req.attach(file.name, file);
      console.log("files="+file.name+ "file="+file);
    });

    req.end();
  }

  render() {
    return (
      <div className="app">
        <ReactDropzone
          onDrop={this.onDrop}
        >
          Drop your best gator GIFs here!!
        </ReactDropzone>
      </div>
    );
  }
}

export default App1;