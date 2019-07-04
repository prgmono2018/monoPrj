import React, {Component} from 'react';

export default class GameManager extends Component {

    constructor(props){
        super(props);
        this.state = {
       
    
          };
      }

/*componentDidMount(){
    this.getGameList();
}*/
   
 

    render () {
        return (
            <tr>
                <td>
                    {
                       typeof this.props.game!='undefined'?(
                            this.props.game.dataType==="iframe"?(
                            <a href={this.props.game.href}>
                                <img src={this.props.game.imgSrc}/>
                            </a>
                        ):(
                            <a data-fancybox="" data-type={this.props.game.dataType} data-src={this.props.game.dataSrc} href={this.props.game.href}>
                                <img src={this.props.game.imgSrc}/>
                            </a>
                    )
                       ):""
                        }
                   
                </td>
            </tr>
      
        );
    }
}