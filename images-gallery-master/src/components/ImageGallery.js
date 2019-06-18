import React, { Component } from 'react';
import * as _ from 'lodash';
import axios from 'axios';
import config from '../config';
import data from '../assets/data';
import Image from './Image';


class ImageGallery extends Component {
    constructor(props) {
   
        super(props);
        this.state = { data :null, delete:null,refresh:false};
        this.server="http://localhost:8000/";
        this.handleChangePicture=this.handleChangePicture.bind(this);
        this.getListFromServer=this.getListFromServer.bind(this);
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
            this.switchFile(data,this);
         
        };
       
    };

 switchFile=async (data,param)=>{
     try{
            let res=  await axios.post(process.env.REACT_APP_SWITCH_FILE, data);
            if (res.status==200){
            console.log("success:"+res);
            param.setState({refresh:true});
            console.log("set refresh to true");
            }
            else{
                console.log("failed:"+res);
            }
     }catch(e)
     {
        console.log("failed:"+e);
     }


}
    savePicToDelete = ({ target }, coordinates) => {

       this.setState({delete:target.dataset.name})
      
    };

componentDidUpdate=()=>  { 

    if (this.state.refresh===true){
        console.log(">> in if componentDidUpdate");
        this.getListFromServer();
        this.setState({refresh: false});
      }
}
getListFromServer=()=>{
   
    axios.get(process.env.REACT_APP_PICLIST)
    .then(
     
                json => {
                    console.log(json);
                    this.setState({data:json});
                    data.append('file', this.state.jsonObj);
                    axios.post('http://localhost:8000/saveImage', data)
                    .then(function (response) {
                    //handle success
                    console.log(response);
                   
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
                
                }
    ).catch(error => {
       
      })


}

    componentWillMount=()=>console.log("componentWillMount");
    componentDidMount=()=>{
        console.log(">> componentDidMount="+this.state.refresh);
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
        //console.log("kk="+this.state.data);
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
