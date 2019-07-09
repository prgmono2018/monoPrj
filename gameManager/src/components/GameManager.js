import React, {Component} from 'react';
import axios from 'axios';
import TwoIconSec from './TwoIconSec';

export default class GameManager extends Component {

    constructor(props){
        super(props);
        this.state = {
            gameData:[]
          };
          this.createTable=this.createTable.bind(this);
      }
componentDidUpdate(){
  window.dispatchEvent(new Event('resize'));
}
componentDidMount(){
    this.getGameList();
 
}

createTable() {
  let table = []

  // Outer loop to create parent
  for (let i = 0; i <this.state.gameData.length; i=i+2) {
    
    table.push(<TwoIconSec items={[this.state.gameData[i],this.state.gameData[i+1]]} key={i} />)
  }
  return table
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
   /*   return (
        <>

            {
              this.state.gameData.map(function(object,i){
                console.log("i="+i);
                if (i%2!=0 || i==0){
                  return <TwoIconSec items={[thiss.state.gameData[i],thiss.state.gameData[i+1]]} key={i} />;
                } 
         
           
            })
            }
        </>
);*/

return (
  <>

     
  {
  this.createTable()
   }
      
  </>
);





    }
}