import React, {Component} from 'react';


export default class OneGameDetails extends Component {

    constructor(props){
        super(props);
        this.state = {
  
      }
      //this.deleteGame = this.deleteGame.bind(this);
      //this.editGame = this.editGame.bind(this);
     }
componentDidUpdate(){

}
componentDidMount(){

}



    render () {
        return (
          <tr>
              		    <td>
							<span className="custom-checkbox">
								<input type="checkbox" id={'checkbox' + this.props.game.index} name="options[]" value="1"/>
								<label htmlFor={'checkbox' + this.props.game.index}></label>
							</span>
						</td>
                        <td>
                          <a href="#editEmployeeModal"  className="edit" onClick={(e)=>this.props.editGame(e)} data-toggle="modal"><i className="material-icons" data-obj={JSON.stringify(this.props.game)} data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                          <a href="#deleteEmployeeModal"  className="delete" onClick={(e)=>this.props.deleteGame(e)} data-toggle="modal"><i className="material-icons" data-obj={JSON.stringify(this.props.game)} data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                        </td>
                      <td>{this.props.game.name}</td>
                      <td>{this.props.game.index}</td>
                      <td>{this.props.game.dataSrc}</td>
                      <td>{this.props.game.dataType}</td>
                      <td>{this.props.game.href}</td>
                      <td>{this.props.game.imgSrc}</td>
                      <td>{this.props.game.dataFancybox}</td>
                  
                    
           </tr>
        );

    }
}