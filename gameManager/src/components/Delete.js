import React, {Component} from 'react';


export default class Delete extends Component {

    constructor(props){
        super(props);
        if (this.props.obj!=null){
        this.state = {
            dataFancybox:this.props.obj.name,
            dataSrc:this.props.obj.dataSrc,
            dataType:this.props.obj.dataType,
            imgSrc:this.props.obj.imgSrc,
            href:this.props.obj.href,
            index:this.props.obj.index,
            name:this.props.obj.name,
            _id:this.props.obj._id,
        }

      }else{
          this.state = {
            dataFancybox:"",
            dataSrc:'',
            dataType:'',
            imgSrc:'',
            href:'',
            index:'',
            name:'',
            _id:''
        }
      }
      this.obj=this.props.obj;


}

componentWillReceiveProps({obj}) {
    //console.log("componentWillReceiveProps")
    let objj=obj;
    if (typeof objj !="object"){
      objj=JSON.parse(obj);
    }
    if (obj){
         this.setState({ 
         dataFancybox:objj.dataFancybox,
         dataSrc:objj.dataSrc,
         dataType:objj.dataType,
         imgSrc:objj.imgSrc,
         href:objj.href,
         index:objj.index,
         name:objj.name,
         _id:objj._id
        })
    }
  }

componentDidUpdate(){

}
componentDidMount(){

}


    render () {
        return (
            <div id="deleteEmployeeModal" className="modal fade">
            <div className="modal-dialog">
                <div className="modal-content">
                    <form>
                        <div className="modal-header">						
                            <h4 className="modal-title">Delete Employee</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        </div>
                        <div className="modal-body">					
                            <p>Are you sure you want to delete these Records?</p>
                            <p className="text-warning"><small>This action cannot be undone.</small></p>
                        </div>
                        <div className="modal-footer">
                            <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel"/>
                            <input type="submit" data-obj={JSON.stringify(this.obj)} onClick={(e)=>this.props.delete(e,this.state)} className="btn btn-danger" value="Delete"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        );

    }
}