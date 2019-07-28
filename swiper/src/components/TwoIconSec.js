import React, { Component } from 'react';
import GameIcon from './GameIcon';
import '../style/swiper.css';

export default class TwoIconSec extends Component {
    constructor (props) {
        super(props);
        this.state = {
            items: this.props.items

        };
    }

    /*componentDidMount(){
    this.getGameList();
}*/

    render () {
        const divStyle = {
            width: '334.5px',
            marginRight: '60px',
            float: 'left'

        };

        return (
            <div className="swiper-slide" style={divStyle} >
                <table>
                    <tbody>
                        <GameIcon game={this.state.items[0]}/>
                        <GameIcon game={this.state.items[1]}/>
                    </tbody>
                </table>
            </div>

        );
    }
}
