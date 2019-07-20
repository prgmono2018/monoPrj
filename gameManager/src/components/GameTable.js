import React, {Component} from 'react';
import { throws } from 'assert';
import OneGameDetails from './OneGameDetails';


export default class GameTable extends Component {

    constructor(props){
        super(props);
        this.state = {
         games:this.props.games 
        }
console.log("GameTable props="+this.props.games)

}


componentDidUpdate(){

}
componentDidMount(){

}


    render () {
        return (
            <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>
                      <span className="custom-checkbox">
                        <input type="checkbox" id="selectAll"/>
                        <label htmlFor="selectAll"></label>
                      </span>
                    </th>
                    <th>Name</th>
                    <th>index</th>
                    <th>dataSrc</th>
                    <th>dataType</th>
                    <th>Href</th>
                    <th>Image Src</th>
                    <th>dataFancybox</th>
                </tr>
            </thead>
            <tbody>
                {
            this.state.games.map(function(game){
                 return <OneGameDetails game={game} />;
                })
            }
            </tbody>
        </table>
        );

    }
}