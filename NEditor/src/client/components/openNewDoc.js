import React, { Component } from 'react';
import axios from 'axios';
import '../css/popupStyle.css';
export default class OpenNewDoc extends Component {
    constructor (props) {
        super(props);
            //this.data=this.props.data;
        this.state={
            prjsPerPage:10,
            currentPage:1,
            upperPageBound: 3,
            lowerPageBound: 0,
            isPrevBtnActive: 'disabled',
            isNextBtnActive: '',
            pageBound: 3
        }
        this.onOpenClick=this.onOpenClick.bind(this)
        this.onClickProject=this.onClickProject.bind(this)
        this.handleClick=this.handleClick.bind(this)


        this.btnDecrementClick = this.btnDecrementClick.bind(this);
        this.btnIncrementClick = this.btnIncrementClick.bind(this);
        this.btnNextClick = this.btnNextClick.bind(this);
        this.btnPrevClick = this.btnPrevClick.bind(this);
        // this.componentDidMount = this.componentDidMount.bind(this);
        this.setPrevAndNextBtnClass = this.setPrevAndNextBtnClass.bind(this);
        this.preventEvents = this.preventEvents.bind(this);
    }
    componentDidMount () 
    {
        $("span.active").removeClass('active');
        $('span#'+this.state.currentPage).addClass('active');
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
       
    }

    handleClick(event) {
        event.stopPropagation();
        const id=event.target.id;
        this.setState({
          currentPage: Number(id)
        });
        $("span.active").removeClass('active');
        $('span#'+id).addClass('active');
        this.setPrevAndNextBtnClass(id);
      } 

      setPrevAndNextBtnClass(listid) {
        
        let totalPage = Math.ceil(this.props.data.length / this.state.prjsPerPage);
        this.setState({isNextBtnActive: 'disabled'});
        this.setState({isPrevBtnActive: 'disabled'});
        if(totalPage === listid && totalPage > 1){
            this.setState({isPrevBtnActive: ''});
        }
        else if(listid === 1 && totalPage > 1){
            this.setState({isNextBtnActive: ''});
        }
        else if(totalPage > 1){
            this.setState({isNextBtnActive: ''});
            this.setState({isPrevBtnActive: ''});
        }
        if (listid==1){
            this.setState({isPrevBtnActive: 'disabled'});
        }
        if (totalPage==listid){
            this.setState({isNextBtnActive: 'disabled'});
        }
        $("span.active").removeClass('active');
        $('span#'+listid).addClass('active');
    }

    btnIncrementClick(event) {
      
        this.preventEvents(event);
        this.setState({upperPageBound: this.state.upperPageBound + this.state.pageBound});
        this.setState({lowerPageBound: this.state.lowerPageBound + this.state.pageBound});
        let listid = this.state.upperPageBound + 1;
        this.setState({ currentPage: listid});
        this.setPrevAndNextBtnClass(listid);
       // $("span.active").removeClass('active');
        //$('span#'+listid).addClass('active');
  }
    btnDecrementClick(event) {
           
      this.preventEvents(event);
      this.setState({upperPageBound: this.state.upperPageBound - this.state.pageBound});
      this.setState({lowerPageBound: this.state.lowerPageBound - this.state.pageBound});
      let listid = this.state.upperPageBound - this.state.pageBound;
      this.setState({ currentPage: listid});
      this.setPrevAndNextBtnClass(listid);
     // $("span.active").removeClass('active');
      //$('span#'+listid).addClass('active');
  }

  btnPrevClick(event) {
    this.preventEvents(event);
    if((this.state.currentPage -1)%this.state.pageBound === 0 ){
        this.setState({upperPageBound: this.state.upperPageBound - this.state.pageBound});
        this.setState({lowerPageBound: this.state.lowerPageBound - this.state.pageBound});
    }
    let listid = this.state.currentPage - 1;
    this.setState({ currentPage : listid});
    this.setPrevAndNextBtnClass(listid);
    //$("span.active").removeClass('active');
    //$('span#'+listid).addClass('active');
}
btnNextClick(event) {
   
this.preventEvents(event);
    if((this.state.currentPage +1) > this.state.upperPageBound ){
        this.setState({upperPageBound: this.state.upperPageBound + this.state.pageBound});
        this.setState({lowerPageBound: this.state.lowerPageBound + this.state.pageBound});
    }
    let listid = this.state.currentPage + 1;
    this.setState({ currentPage : listid});
    this.setPrevAndNextBtnClass(listid);
    //$("span.active").removeClass('active');
   // $('span#'+listid).addClass('active');
}

preventEvents(event){
    event.stopPropagation(event)
    event.preventDefault(event);
}
    render () {
        const { currentPage, prjsPerPage,upperPageBound,lowerPageBound,isPrevBtnActive,isNextBtnActive} = this.state;
        
        
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
     /*   const renderPageNumbers = pageNumbers.map((number,index) => {
            return (
               <b key={number}
                id={number}
                onClick={this.handleClick}>  { ((index+1)<rowLen)? number+", ": number}  
                </b>
             
            );
          });*/
          const renderPageNumbers = pageNumbers.map(number => {
            if(number === 1 && currentPage === 1){
                return(
                    <span key={number} className='active' id={number}><a href='#' id={number} onClick={this.handleClick}>{number}</a></span>
                )
            }
            else if((number < upperPageBound + 1) && number > lowerPageBound){
                return(
                   number==this.state.currentPage ? <span key={number} id={number} className='active'> <a href='#' id={number} onClick={this.handleClick}>{number}</a></span>: <span key={number} id={number}><a href='#' id={number} onClick={this.handleClick}>{number}</a></span>
                )
            }
        });
        let pageIncrementBtn = null;
        if(pageNumbers.length > upperPageBound){
            pageIncrementBtn = <span className=''><a href='#' onClick={this.btnIncrementClick}> &hellip; </a></span>
        }
        let pageDecrementBtn = null;
        if(lowerPageBound >= 1){
            pageDecrementBtn = <span className=''><a href='#' onClick={this.btnDecrementClick}> &hellip; </a></span>
        }
        let renderPrevBtn = null;
        if(isPrevBtnActive === 'disabled') {
            renderPrevBtn = <span className={isPrevBtnActive} onClick={this.preventEvents}><span id="btnPrev"> Prev </span></span>
        }
        else{
            renderPrevBtn = <span className={isPrevBtnActive}><a href='#' id="btnPrev" onClick={this.btnPrevClick}> Prev </a></span>
        }
        let renderNextBtn = null;
        if(isNextBtnActive === 'disabled') {
            renderNextBtn = <span className={isNextBtnActive} onClick={this.preventEvents}><span id="btnNext"> Next </span></span>
        }
        else{
            renderNextBtn = <span className={isNextBtnActive}><a href='#' id="btnNext" onClick={this.btnNextClick}> Next </a></span>
        }

/*********************** */

        return (
                  <div className="popup" onClick={this.onOpenClick} >Click me!
                        <div style={{position: 'absolute'}}> 
                                    <div className="popuptext" id="myPopup">
                                        {currentPrjs}
                                        <div id="page-numbers" className="pagination pageinationWrapper">
                                            {renderPrevBtn}
                                            {pageDecrementBtn}
                                            {renderPageNumbers}
                                            {pageIncrementBtn}
                                            {renderNextBtn}
                                        </div>
                                    </div>
                        </div>
                    </div>

        );
    }
}
