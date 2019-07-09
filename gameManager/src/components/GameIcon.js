import React, {Component} from 'react';

export default class GameIcon extends Component {

    constructor(props){
        super(props);
        this.state = {
       
    
        };

        this.requestFullScreen=this.requestFullScreen.bind(this);
        this.linkClick=this.linkClick.bind(this);
      }

/*componentDidMount(){
    this.getGameList();
}*/
  requestFullScreen(element){
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

    if (requestMethod) { // Native full screen.
        requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
   }
 
   linkClick(element){
    this.requestFullScreen(element);
    location.href = element.target.dataset.href;
   }

    render () {
        return (
            <tr>
                <td>
                    {
                       typeof this.props.game!='undefined'?(
                            this.props.game.dataType!=="iframe"?(
                            <a href="#" data-href={this.props.game.href} onClick={(element)=>this.linkClick(element)}>
                                <img data-href={this.props.game.href} src={this.props.game.imgSrc}/>
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