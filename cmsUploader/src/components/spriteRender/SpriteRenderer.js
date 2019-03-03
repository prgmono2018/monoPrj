import React, { Component } from 'react';
import Tile from './Tile'
import PropTypes from 'prop-types';

class SpriteRenderer extends React.Component {
    static defaultProps = {
      src: PropTypes.string.isRequired,
      tile: PropTypes.object.isRequired,
      scale: PropTypes.number.isRequired
    };

    tick = 0;
    frame= 0;
    state = {
      state: 0
    };
  
  
    componentDidMount() {
        console.log("sp ren componentDidMount");
      this.animate();
    }
  
    componentWillUnmount() {
      cancelAnimationFrame(this.frame);
    }
  
    animate = () => {
        console.log("anonate");
        const { state } = this.state;
        const { framesPerStep, states } = this.props;
       if (this.tick === framesPerStep) {
          this.tick = 0;
          this.setState({
            state: (state + 1) % states
          });
        }
        this.tick += 1;
        this.frame = requestAnimationFrame(this.animate);
    }
  
    render() {
      const { src, tile, scale } = this.props;
      const { state } = this.state;
      return <Tile src={src} state={state} tile={tile} scale={scale} />;
    }
  }

  export default SpriteRenderer;