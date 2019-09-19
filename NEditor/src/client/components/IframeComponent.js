import React, { Component } from 'react';
import PropTypes from 'prop-types';


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

IframeComponent.propTypes = {
  iframe: PropTypes.string,
};
