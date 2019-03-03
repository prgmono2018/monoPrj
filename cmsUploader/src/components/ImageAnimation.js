import React, { Component } from 'react';
import  '../css/imageAnimStyle.css';
export default class ImageAnimation extends Component {
    constructor(props) {
        super(props);
        this.setImagesFromProps();
        this.next = this.next.bind(this);
        this.setImagesFromProps=this.setImagesFromProps.bind(this);
        this.state = {index: 0};
    }

    setImagesFromProps(){
      this.images = this.props.images.map(function(image) {
        return  require(`${image}`);
        });
    }
    componentDidMount() {
        console.log("*** componentDidMount="+this.state.index);
        this.next();
    }

    next() {
        setTimeout(() => {
            this.setState({index: (this.state.index+1)%5});
            this.next();
        }, 1000);
    }

    render() {
    
        return (
            <div>
           <img
              src={this.images[this.state.index]} className="imgStyle"
            />
     
            </div>
        )
    }
}
