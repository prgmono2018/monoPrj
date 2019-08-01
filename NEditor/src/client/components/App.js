import React, { Component } from 'react';


export default class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            gameData: []
        };
        //this.createTable = this.createTable.bind(this);
    }
    componentDidMount () {
    
    }

    

    render () {
        console.log("render=" + this.state.gameData);

        return (
  <>


  </>
        );
    }
}
