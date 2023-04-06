import React, { useState, useRef } from "react";
import { useEffect } from "react";
import imageHero from "assets/images/bg.jpg";
import ImageClick from "assets/images/click.png";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import emailjs from '@emailjs/browser';

import "../assets/fonts/MatSaleh.otf";

export default function Booking(props) {
  const form = useRef()
  const history = useHistory();
  const [bookingPhoto, setBookingPhoto] = useState();


  
  





  function Booking() {
    console.log("test");
    console.log(bookingPhoto);
    var timeOut = 0;
    var snap_token_l;
    var paycode;

  

    if(bookingPhoto != undefined){
        var body = {
            username: bookingPhoto,
          };
      
          Axios.post("https://express.studiopoonya.com/users/booking", body)
          .then((res) => {
              console.log("user booking found/created")
              Axios.post("https://express.studiopoonya.com/payment/booking", body)
              .then((res) => {
                snap_token_l = res.data.snapToken;
                paycode = res.data.response.transaction_number;
                console.log(res);
                console.log(paycode);

                var data_email ={
                  redeemcode : paycode,
                  user_email : bookingPhoto
                }
                emailjs.send('service_g4thb5u', 'template_zeszmog', data_email, '3s3SDsa482F2ptCU7')
                .then((result) => {
                  // alert("sukses")
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });  
               
        
                return window.snap.pay(snap_token_l, {
                  onSuccess: function (result) {
                    // alert("success!"); console.log(result);
                   

                    Axios.put(
                      `http://express.studiopoonya.com/payment/update/status/${paycode}`
                    )
                      .then((resultcode) => {
                        console.log(resultcode);
                        console.log("sukses");
                       
                     
                      })
                      .catch((error) => {
                        console.log("error");
                      });
                    // window.addEventListener("click", openDSLR())
                    //  console.log(result)
                    // document.getElementById('test-button').click()
                    /* You may add your own implementation here */
                  },
                  onPending: function (result) {
                    /* You may add your own implementation here */
                    alert("wating your payment!");
                    console.log(result);
                  },
                  onError: function (result) {
                    /* You may add your own implementation here */
                    alert("payment failed!");
                    console.log(result);
                  },
                  onClose: function () {
                    /* You may add your own implementation here */
                    // alert('you closed the popup without finishing the payment');
                  },
                });
              })
              .catch((error) => {
                console.log("error");
              });
          }).catch((err)=> {
              console.error(err)
          });
    }
    else{
        alert("Please input your email")
    }
   
  }

  useEffect(() => {
    // Sandbox
    // const snapSrcUrl = 'https://app.sandbox.midtrans.com/snap/snap.js';
    // const myMidtransClientKey = 'SB-Mid-client-LuRh4t6hempU6vad'; //change this according to your client-key

    //Production
    const snapSrcUrl = "https://app.midtrans.com/snap/snap.js";
    const myMidtransClientKey = "Mid-client-XZCR9t5ePdhcGaNC"; //change this according to your client-key

    const script = document.createElement("script");
    script.src = snapSrcUrl;
    script.setAttribute("data-client-key", myMidtransClientKey);
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="wrapper">
      <form className="form-signin">
        <h2 className="form-signin-heading">Booking Photo</h2>
        <input 
        
          type="email"
          onChange={(e) => setBookingPhoto(e.target.value)}
          className="form-control"
          name="username"
          placeholder="Input Email"
          required
        />
        <br />

        <button
          className="btn btn-lg btn-primary btn-block"
          type="button"
          onClick={() => Booking()}
        >
          Booking
        </button>
     
      </form>
    </div>
  );
}
