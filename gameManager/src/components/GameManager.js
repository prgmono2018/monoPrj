import React, {Component} from 'react';
import axios from 'axios';
import Pagination from './Pagination';
import Delete from './Delete';
import EditGame from './EditGame';
import AddGame from './AddGame';
import OneGameDetails from './OneGameDetails';

export default class GameManager extends Component {

    constructor(props){
        super(props);
        this.state = {
            gameData:[],
            changeObject:null,
            deleteObject:null,
          };
          this.deleteGame = this.deleteGame.bind(this);
          this.editGame = this.editGame.bind(this);
          this.editObj = this.editObj.bind(this);
          this.addObj = this.addObj.bind(this);
          this.updateStateGameArr=this.updateStateGameArr.bind(this);
        this.deleteObj=this.deleteObj.bind(this);
      }

      componentDidUpdate(){
     
      }
      componentDidMount(){
          this.getGameList();
      
      }
      editGame(e){
        console.log("Edit game")
        this.setState({ changeObject: e.target.dataset.obj })
        //console.log("Edit obj-action-"+JSON.stringify(e.target.dataset.obj) )
     }

     deleteGame(e){
      console.log("Edit game")
      this.setState({ deleteObject: e.target.dataset.obj })
      //console.log("Edit obj-action-"+JSON.stringify(e.target.dataset.obj) )
   }
      saveDeleteObj(){
        console.log("delete game")
        this.setState({ changeObject: e.target.dataset.obj })
      }

      addObj(e,addObj){
        
        console.log("Edit obj");
        $("#addEmployeeModal").hide();
        $(".modal-backdrop").hide();
        const url = 'http://localhost:8000/addGame';
        axios.post(url,addObj).then(
          
                json => {
                  console.log("obj="+console.log(e));
                
                  this.getGameList();
                 
     
                }
              ).catch(error => {
               
                  console.log('error code=', error.response.status);
                  console.log('errorType', typeof error);
                  console.log('error', Object.assign({}, error));
                
                })
     
      }
      deleteObj(e,deleteState){
        console.log("Edit obj");
        $(".modal-backdrop").hide();
        $("#deleteEmployeeModal").hide();
        const url = 'http://localhost:8000/deleteGame';
        axios.post(url,deleteState).then(
          
                json => {
                  console.log("obj="+console.log(e));
                
                  this.getGameList();
                 
     
                }
              ).catch(error => {
               
                  console.log('error code=', error.response.status);
                  console.log('errorType', typeof error);
                  console.log('error', Object.assign({}, error));     
                })

      }
   updateStateGameArr(obj){
    let newState = Array.from(Object.create(this.state.gameData));
    var foundIndex = newState.findIndex(x => x._id == obj._id);
    newState[foundIndex] = obj;
    this.setState({gameData:newState});
   }



      editObj(e,editState){
        console.log("Edit obj");
        $(".modal-backdrop").hide();
        $("#editEmployeeModal").hide();
        let action=e.target.dataset.action;
      var self=this;
        const url = 'http://localhost:8000/updateGame';
        axios.post(url,editState).then(
          
                json => {
                  console.log("obj="+console.log(e));
                
                  this.getGameList();
                 
     
                }
              ).catch(error => {
               
                  console.log('error code=', error.response.status);
                  console.log('errorType', typeof error);
                  console.log('error', Object.assign({}, error));
                
                })
      
      

   /*      axios.post(url, 
          editState,(e,obj)=>{
             console.log("obj="+console.log(e));
             if (e){
               console.log(e)
             }else{
              this.setState({changeObject:obj});
             }

          }
    );*/
        
      }

 
     getGameList(){

        console.log("getGameList")
        axios.get("http://localhost:8000/gameList")
        .then(
          
          json => {
            console.log("json="+json.data);
                this.setState({ gameData: json.data })
                console.log("getGameListstate"+this.state.gameData)
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
        
          })


     }
    

    render () {
      console.log("render="+this.state.gameData)
     
      return (
        <>
        <div className="container">
        <div className="table-wrapper">
  
            <table className="table table-striped table-hover">
            <thead>
            <tr>
                    <th scope="col" colSpan="8">
                        <div className="table-title">
                            <div className="row">
                                 <div className="col-sm-6">
                                     <h2>Manage <b>Employees</b></h2>
                                 </div>
                                <div className="col-sm-6">
                                    <a href="#addEmployeeModal" className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Employee</span></a>
                                    <a href="#deleteEmployeeModal" className="btn btn-danger" data-toggle="modal"><i className="material-icons">&#xE15C;</i> <span>Delete</span></a>						
                                </div>
                            </div>
                  
                       </div>
                    </th>
                    
                </tr>

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
            this.state.gameData.map(function(game){
    
                 return <OneGameDetails editGame={this.editGame} deleteGame={this.deleteGame}game={game} />;
                }.bind(this))
            }
            </tbody>
        </table>





			      <Pagination/>
        </div>
      </div>
      <AddGame  add={this.addObj}/>
      <EditGame obj={this.state.changeObject} edit={this.editObj}/>
      <Delete obj={this.state.deleteObject} delete={this.deleteObj}/>
      </>
);


    }
}