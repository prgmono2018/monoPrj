import React, { Component } from 'react';
import { Link } from "react-router-dom"; 

class UploadDone extends Component {
  render() {
    return (
        <div>
          <h2>Files were uploaded</h2>

          <Link to="/" className="btn btn-primary">Upload more</Link>

        </div>
    );
  }
}

export default UploadDone;