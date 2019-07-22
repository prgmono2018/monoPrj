import React, {Component} from 'react';
import Slider from "./Slider";
import '../style/jquery.fancybox.min.css';
import '../style/swiper.css'

export default class SliderWrap extends Component {

    constructor(props){
        super(props);
        this.state = {
  
      }
     }
componentDidUpdate(){

}
componentDidMount(){
   

    
}


    render () {
        let divWrapperStyle={
            transform: 'translate3d(0px, 0px, 0px)'
        }

    
        return (
           
         <>  
           
              <div className="swiper-wrapper" style={divWrapperStyle}>
                  <Slider/>
              </div>
            
            
          </>  
           
        );

    }
}