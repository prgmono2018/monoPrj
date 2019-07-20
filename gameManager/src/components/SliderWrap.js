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
    const script = document.createElement("script");
    script.src = "../swiper/jquery.fancybox.min.js.download";
    script.async = true;
    document.body.appendChild(script);

    const script1 = document.createElement("script");
    script1.src = "../swiper/jquery.fancybox.min.js.download";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src = "../swiper/swiper.min.js.download";
    script2.async = true;
    document.body.appendChild(script2);
    window.dispatchEvent(new Event('resize'));

    
}


    render () {
        let divWrapperStyle={
            transform: 'translate3d(0px, 0px, 0px)'
        }

    
        return (
           
         <>  
            <div className="swiper-container">
              <div className="swiper-wrapper" style={divWrapperStyle}>
                  <Slider/>
              </div>
              <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div>
              <div className="swiper-pagination" style={{backgroundColor: 'transparent'}}></div> 
            </div>
          </>  
           
        );

    }
}