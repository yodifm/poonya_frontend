import React from "react";

import imageHero from "assets/images/bg.jpg";

import "../assets/fonts/MatSaleh.otf"

import Button from "elements/Button";

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo();
  }
  return (
    <div style={{  
      backgroundImage:`url(${imageHero})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height:721
    }}>

    <section className="container pt-4" >
      <div className="row align-center">
        <div className="col-auto pr-5" style={{ width: 500 }}>
          <h1 className="h2 line-height-1 mb-3 MatSaleh hero-poonya1" >
            Here, <div style={{color:'white'}}>
               it's all about fun 
            </div>
          </h1>
         
          {/* <p className="mb-5 font-weight-light text-gray-500 w-75 mat-saleh">
            We provide what you need to enjoy your holiday with family. time to
            make another memorable moments.
          </p> */}
          <Button
            className="btn px-3 start-photo"
            hasShadow
           
            onclick={showMostPicked}
            >
            Start Photo
          </Button>{" "}
          &nbsp;&nbsp;&nbsp;
          <Button
            className="btn px-3 booking-photo"
            hasShadow
           
            onclick={showMostPicked}
            >
            Booking Photo
          </Button> <br/><br/>
          <div>
          <form>
            <input type="text" placeholder="Do You have Coupon ?" className="codeInput"/>
                  <Button className="btn-get-started redeemCode">Redeem</Button>
                </form>
          </div>
        </div>
        <div class="mt-3">
              
            </div>
        <div className="row mt-5">
          <div className="col-auto">
         
          </div>
        </div>
      </div>
    </section>
            </div>
  );
}
