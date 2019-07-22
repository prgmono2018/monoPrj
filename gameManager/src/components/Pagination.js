import React, {Component} from 'react';


export default class Pagination extends Component {

    constructor(props){
        super();
        if (this.props!=null&&this.props!='undefined'){
        this.state = {
         // games: this.props.games,
          currentPage: this.props.currentPage,
          pageNumbers:this.props.pageNumbers,
        
        };
       this.pageNum=this.props.pageNum;
       this.gamesPerPage=this.props.gamesPerPage;
    }else{
        this.state = {
          currentPage: 1,
          pageNumbers:[],
         
        };
    }
        this.handleClick = this.handleClick.bind(this);

}

 handleClick(event) {
    this.setState({
        currentPage: Number(event.target.id)
    });
  }
  componentWillReceiveProps(props) {
    if (props){
        this.setState({ 
            currentPage: props.currentPage,
            pageNumbers:props.pageNumbers,
            

       })
        this.pageNum=props.pageNum;
        this.gamesPerPage=props.gamesPerPage;
   }
  }
    render () {
        const currPage=Number(this.state.currentPage);
        const location=Number(this.gamesPerPage)*Number(this.state.currentPage);

        const renderPageNumbers = this.state.pageNumbers.map((number) => {
            return (
              <li
                key={number}
                id={number}
                onClick={this.props.onPageClick}
                className={`page-item ${(number==currPage) ? "active":""}`}
                data-currentPage={number}
                
              ><a href="#"  onClick={this.props.onPageClick} data-currentPage={number} class="page-link">
                {number}
                </a>
              </li>
            );
          });
      
        return (
            <div className="clearfix">
                <div className="hint-text">Showing <b>{this.gamesPerPage}</b> out of <b>{this.pageNum}</b> entries</div>
                <ul className="pagination">
                    <li className={`page-item ${(currPage==1)?"disabled":""}`} onClick={this.props.onPageClick} data-currentPage={(currPage>1)?currPage-1:1}><a href="#" onClick={this.props.onPageClick} data-currentPage={(currPage>1)?currPage-1:1}>Previous</a></li>
                        {renderPageNumbers}
                    <li className={`page-item ${(location>=this.pageNum)?"disabled":""}`}  onClick={this.props.onPageClick} data-currentPage={location>=this.pageNum?Number(this.state.currentPage):Number(this.state.currentPage+1)}><a onClick={this.props.onPageClick} data-currentPage={location>=this.pageNum?Number(this.state.currentPage):Number(this.state.currentPage+1)} href="#" className="page-link">Next</a></li>
                </ul>
            </div>
        );

    }
}