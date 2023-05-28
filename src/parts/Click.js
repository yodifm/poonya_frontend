import React from "react";
import { useEffect } from "react";
import imageHero from "assets/images/bg.jpg";
import ImageClick from "assets/images/click.png"
import Axios from 'axios'
import { useHistory } from "react-router-dom";

import "../assets/fonts/MatSaleh.otf";



export default function Click(props) {
  const history = useHistory();
  

  function openDSLR(){
    // window.open("https://www.mozilla.org")

     window.open('http://localhost:1500/api/start?mode=print&password=Xbyg1o6qCvSBBA5T','_blank').focus();
  }

  

  return(
    <div
        style={{
          backgroundImage: `url(${ImageClick})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: 750,
          width: 400,
          marginTop:-80, 
          marginLeft:300
        }}
      >
              <button className="btn click-photo" style={{marginTop:450, marginLeft:105}} id= "pay-button" hasShadow onClick={openDSLR} >
                Start Photo
              </button>{" "}
 
          </div>
      
       
    
  );
}
