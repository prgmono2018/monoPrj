import React, {Component} from 'react';
import axios from 'axios';
import TwoIconSec from './TwoIconSec';

export default class GameManager extends Component {

    constructor(props){
        super(props);
        this.state = {
       
            gameData:[]
          };
      }

componentDidMount(){
    this.getGameList();
}
     getGameList(){

        console.log("updated items")
        axios.get("http://localhost:8000/gameList")
        .then(
          
          json => {
            console.log("json="+json.data);
                this.setState({ gameData: json.data })
          }
        ).catch(error => {
         
            console.log('error code=', error.response.status);
            console.log('errorType', typeof error);
            console.log('error', Object.assign({}, error));
            console.log('getOwnPropertyNames', Object.getOwnPropertyNames(error));
            console.log('stackProperty', Object.getOwnPropertyDescriptor(error, 'stack'));
            console.log('messageProperty', Object.getOwnPropertyDescriptor(error, 'message'));
            console.log('stackEnumerable', error.propertyIsEnumerable('stack'));
            console.log('messageEnumerable', error.propertyIsEnumerable('message'));
                /* switch (error.response.status) {
              case 401:
              this.props.history.push('/c');
                break
             
            }*/
          })


     }
    

    render () {
      console.log("render="+this.state.gameData)
     var thiss=this;
      return (
        <div>

            {
              this.state.gameData.map(function(object, i=i+2){
                  return <TwoIconSec items={[thiss.state.gameData[i],thiss.state.gameData[i+1]]} key={i} />;
            })
            }
        </div>
);





    }
}