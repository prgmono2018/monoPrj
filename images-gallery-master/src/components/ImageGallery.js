import React, { Component } from 'react';
import * as _ from 'lodash';
import axios from 'axios';
import config from '../config';
import Image from './Image';


class ImageGallery extends Component {
    constructor(props) {
        super(props);
        require('dotenv').config();
        this.state = { data :null, delete:null,refresh:true};
        this.server=process.env.REACT_APP_SERVER;
        this.handleChangePicture=this.handleChangePicture.bind(this);
        this.getListFromServer=this.getListFromServer.bind(this);
        this.switchFile=this.switchFile.bind(this);
    }

    /**
     * Sets the selected image in the data object, uses the coordinates to find the image path.
     *  
     * @param event The event.
     * @param coordinates The image's path in the data object.
     */
    handleChangePicture = ({ target }, coordinates) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(target.files[0]);
        fileReader.onload = (e) => {
            this.setState(state => (_.set(state.data, coordinates, e.target.result), state));
            let data = new FormData();
            data.append('file', target.files[0]);
            data.append('delete', this.state.delete);
            this.switchFile(data);
         
        };
       
    };

 switchFile=async (data)=>{
     try{
            let res=  await axios.post(process.env.REACT_APP_SWITCH_FILE, data);
            if (res.status==200){
                //console.log("success:"+res);
                this.setState({refresh:true});
                //console.log("set refresh to true");
            }
            else{
                console.log("Failed:"+res);
            }
     }catch(e)
     {
        console.log("Failed:"+e);
     }


}
    savePicToDelete = ({ target }, coordinates) => {

       this.setState({delete:target.dataset.name})
      
    };

componentDidUpdate=()=>  { 

    if (this.state.refresh===true){
        //console.log(">> in if componentDidUpdate");
        this.getListFromServer();
        this.setState({refresh: false});
      }
}
getListFromServer=()=>{
    var config = {
        headers: { 'Access-Control-Allow-Origin': '*' },
      };
    axios.get(process.env.REACT_APP_PICLIST,config)
    .then(
     
                json => {
                    //console.log(json);
                    this.setState({data:json});
   
                }
    ).catch(error => {
       console.log("Error"+error)
      })


}

    //componentWillMount=()=>console.log("componentWillMount");
    componentDidMount=()=>{
        //console.log(">> componentDidMount="+this.state.refresh);
        this.getListFromServer();
     

    }
    isImage = (resource) => {
        return (new RegExp(`.(${config.extensions.join('|')})$`)).test(resource) || resource.startsWith('data:image');
    };

    /**
     * A Recoursive function that goes over all the elements in the resource 
     * and for each element that represents an image - 
     * returns an Image Component with the path of the element in the data object (coordinates).
     * 
     * @param resource The resource to generate images from.
     * @param coordinates The resource's path in the data object.
     * @return Returns array of Image components.
     */
    renderImages = (resource, coordinates) => {
        
        //console.log("resource="+resource);
        if (_.isArray(resource)) {
            return _.map(resource, (res, index) => this.renderImages(res, [...coordinates, index]));
        }
        if (_.isObject(resource)) {
            return _.keys(resource).map((objkey) => this.renderImages(resource[objkey], [...coordinates, objkey]));
        }
        if (_.isString(resource) && (this.isImage(resource))) {
            return <Image
                key={coordinates.join()}
                image={this.server+"/"+resource}
                handleChangePicture={this.handleChangePicture}
                coordinates={coordinates} 
                savePicToDelete={this.savePicToDelete}
                />;
        }
        
    };
renderResource=()=>{

 
}
    render() {
        
        this.renderResource();
        return <div className="row">
            {this.state.data ? this.renderImages(this.state.data, []) :
                <div className="spiner-wrapper">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>}
        </div>;
    };
}

export default ImageGallery;
