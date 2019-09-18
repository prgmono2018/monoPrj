import React, { Component } from 'react';



export default class IframeComponent extends Component {
    iframe () {
        return {
          __html: this.props.iframe
        }
      }

    componentDidMount(){
 
     
    }
    shouldComponentUpdate()
     {
      return false;
      }
      
      render(){
        return (
          <div>
            <div dangerouslySetInnerHTML={ this.iframe() } />
          </div>
        );
      }
}
