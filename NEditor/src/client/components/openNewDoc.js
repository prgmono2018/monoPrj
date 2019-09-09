import React, { Component } from 'react';
import axios from 'axios';
import '../css/popupStyle.css';
export default class OpenNewDoc extends Component {
    constructor (props) {
        super(props);
            //this.data=this.props.data;
        this.state={
            prjsPerPage:10,
            currentPage:1
        }
        this.onOpenClick=this.onOpenClick.bind(this)
        this.onClickProject=this.onClickProject.bind(this)
        this.handleClick=this.handleClick.bind(this)
    }
    componentDidMount () 
    {
        
    }
    
     onClickProject(e,prjName){
       
        axios.get(`http://localhost:7000/get/${prjName}`   
        )
        .then(
          
        json => {
           const obj=json.data.docs[0];
           code[0]=json.data.docs[0].preload
           code[1]=json.data.docs[0].create
           code[2]=json.data.docs[0].update
           code[3]=json.data.docs[0].render
           editor.getSession().setValue(code[0])
           this.props.setFatherState("false",json.data.docs[0].prjName,null);
           
          }
         
        ).catch(error => {
         
            
          })

    }

    onOpenClick()
    
    {
        var popup = document.getElementById("myPopup");
        //popup.innerHTML="Loading......"
        popup.classList.toggle("show");
      /*  axios.get("http://localhost:7000/getAllProjects"
        )
        .then(
         
        json => {
            popup.innerHTML="";
            this.setState({data:json.data.docs});
           // popup.innerHTML=this.printPrjList(json.data.docs);
          }
         
        ).catch(error => {
         
            console.log('error code=', error.response.status);
          })
*/
       
    }

    handleClick(event) {
        event.stopPropagation();
        this.setState({
          currentPage: Number(event.target.id)
        });
      } 

    render () {
        const { currentPage, prjsPerPage } = this.state;
        //var prjs=this.props.data;
        var names = [];
        if (this.props.data.length>0){
        names=this.props.data.map(game => 
            <div key={game.prjName}
        onClick={(e)=>this.onClickProject(e,game.prjName)}>{game.prjName}</div>);
        }

/************ */

        // Logic for displaying current Prjs
        const indexOfLastPrj = currentPage * prjsPerPage;
        const indexOfFirstPrj = indexOfLastPrj - prjsPerPage;
        var currentPrjs=[]
        if (names.length>0)
            currentPrjs = names.slice(indexOfFirstPrj, indexOfLastPrj);

     /*   const renderPrjs = currentPrjs.map((prj, index) => {
          return <li key={index}>{prj}</li>;
        });*/

        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(names.length / prjsPerPage); i++) {
          pageNumbers.push(i);
        }
        const rowLen = pageNumbers.length;
        const renderPageNumbers = pageNumbers.map((number,index) => {
            return (
               <b key={number}
                id={number}
                onClick={this.handleClick}>  { ((index+1)<rowLen)? number+", ": number}  
                </b>
             
            );
          });


/*********************** */

        return (
                  <div className="popup" onClick={this.onOpenClick} >Click me!
                 <div style={{position: 'absolute'}}> 
                            <div className="popuptext" id="myPopup">
                            {currentPrjs}
                            <div>{renderPageNumbers}</div>
                            </div>
                          
                </div>

</div>





        );
    }
}
