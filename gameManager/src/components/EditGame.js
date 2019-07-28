import React, {Component} from 'react';


export default class EditGame extends Component {

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
      this.onChange=this.onChange.bind(this)
     }

     onChange (e ){this.setState({ [e.target.name]: e.target.value }); console.log(JSON.stringify(this.state))}

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

    render () {
        console.log(this.props.obj?this.props.obj.name:"empty ")
        return (
            <div id="editEmployeeModal" className="modal fade">
            <div className="modal-dialog">
                <div className="modal-content">
                    <form>
                        <div className="modal-header">						
                            <h4 className="modal-title">Edit Employee</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        </div>
                        <div className="modal-body">					
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" name="name" onChange={this.onChange} className="form-control" value={this.state.name} required></input>
                            </div>
                            <div className="form-group">
                                <label>Index</label>
                                <input type="text" name="index" onChange={this.onChange} className="form-control" value={this.state.index} required/>
                            </div>
                            <div className="form-group">
                                <label>imgSrc</label>
                                <input type="text" name="imgSrc" onChange={this.onChange} className="form-control" value={this.state.imgSrc} required/>
                            </div>	
                            <div className="form-group">
                                <label>dataSrc</label>
                                <input type="text" name="dataSrc" onChange={this.onChange} className="form-control" value={this.state.dataSrc} required/>
                            </div>
                            <div className="form-group">
                                <label>dataType</label>
                                <input type="text" name="dataType" onChange={this.onChange} className="form-control" value={this.state.dataType} required/>
                            </div>
                            <div className="form-group">
                                <label>href</label>
                                <input type="text" name="dataType" onChange={this.onChange} className="form-control" value={this.state.href} required/>
                            </div>
                			
                        </div>
                        <div className="modal-footer">
                            <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel"/>
                            <input type="buttom" data-action="edit" data-obj={JSON.stringify(this.obj)} onClick={(e)=>this.props.edit(e,this.state)} className="btn btn-info" value="Save"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        );

    }
}