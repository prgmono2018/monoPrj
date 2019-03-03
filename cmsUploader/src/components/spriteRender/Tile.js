import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Container,Image} from './spriteConsts' 

class Tile extends React.Component {
    static propTypes = {
      src: PropTypes.string.isRequired,
      tile: PropTypes.object.isRequired,
      state: PropTypes.number.isRequired,
      scale: PropTypes.number.isRequired
    };
  
    render() {
      const { src, tile, state, scale } = this.props;
      const left = tile.width * state;
      return (
        <Container width={tile.width} height={tile.height} scale={scale}>
          <Image src={src} left={left} />
        </Container>
      );
    }
  }

  export default Tile;