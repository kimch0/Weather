import React from "react";

export default function Icon(props){
    let code = parseInt(props.code)
    let img = './img/';

    if(code <= 232){
        img = img + 'storm.png'; 
    }else if(code <= 321){
        img = img + 'dizzle.png';
    }else if(code <= 531){
        img = img + 'rain.png'
    }else if(code <= 622){
        img = img + 'snow.png'
    }else if(code <= 781){
        img = img + 'foggy.png'
    }else if(code === 800){
        img = img + 'sunny.png'
    }else if(code <= 802){
        img = img + 'cloudy2.png'
    }else if (code <= 804){
        img = img + 'cloudy2.png'
    }
    
    return<>
         <img
          src={img}
          alt="Weather icon"
          width="100"
        />
    </>

}