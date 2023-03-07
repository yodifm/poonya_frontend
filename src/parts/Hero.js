import React, { useState } from "react";
import { useEffect } from "react";
import imageHero from "assets/images/bg.jpg";
import Axios from 'axios'
import { useHistory } from "react-router-dom";

import "../assets/fonts/MatSaleh.otf";



export default function Hero(props) {
  const history = useHistory();
   const [inputRedeem, setInputRedeem] = useState()
  function showMostPicked() {
    console.log("test")
    var timeOut = 0
    var snap_token_l




    Axios.post("https://express.studiopoonya.com/payment")
    .then((res) => {
      snap_token_l = res.data.snapToken
      console.log(res);


      
      return (
        window.snap.pay(snap_token_l, {
          onSuccess: function(result){
            // alert("success!"); console.log(result);
            history.push("ClickPage")
            // window.addEventListener("click", openDSLR())
          //  console.log(result)
            // document.getElementById('test-button').click()
            /* You may add your own implementation here */
          
          },
          onPending: function(result){
            /* You may add your own implementation here */
            alert("wating your payment!"); console.log(result);
          },
          onError: function(result){
            /* You may add your own implementation here */
            alert("payment failed!"); console.log(result);
          },
          onClose: function(){
            /* You may add your own implementation here */
            
            // alert('you closed the popup without finishing the payment');
          }
        })
      )
    })
    .catch((error) => {
      console.log("error");
    });

    

    
    
    
    // window.scrollTo()
    
    
  }

  function pindah(){
    history.push("ClickPage")
    //  window.open('http://localhost:1500/api/start?mode=print&password=bP_A6u6sKblbviUR','_blank').focus();
  }

  useEffect(() => {
    // Sandbox  
    // const snapSrcUrl = 'https://app.sandbox.midtrans.com/snap/snap.js';
    // const myMidtransClientKey = 'SB-Mid-client-LuRh4t6hempU6vad'; //change this according to your client-key
    
    //Production
    const snapSrcUrl = 'https://app.midtrans.com/snap/snap.js';
    const myMidtransClientKey = 'Mid-client-XZCR9t5ePdhcGaNC'; //change this according to your client-key
    
  
    const script = document.createElement('script');
    script.src = snapSrcUrl;
    script.setAttribute('data-client-key', myMidtransClientKey);
    script.async = true;
  
    document.body.appendChild(script);
  
    return () => {  
      document.body.removeChild(script);
      
    }
  }, []);


const RedeemCode = () => {
    // var data_ticket = {
    //   quantity: 1,
    //   ticket_used: true,
    //   expired: "2023-01-22 08:10:05",
    //   ticket_username: "testdummy5",
    //   createdBy: "admin",
    // };
    Axios.get(`https://express.studiopoonya.com/payment/number/${inputRedeem}`)
      .then((res) => {
        console.log(res);
        if (res.data.transaction_number == inputRedeem && res.data.payment_method == "adminredeem" && res.data.pay_status == "Pending") {
              // history.push('ClickPage')
              // history.go(0)
              // alert("success redeem")
          Axios.put(`http://express.studiopoonya.com/payment/update/status/${res.data.transaction_number}`)
            .then((result) => {
              console.log("suksess")
              // console.log(result);
              // history.push('ClickPage')
              // history.go(0)
            })
            .catch((error) => {
              console.log("error");
            });
        }
        else{
          alert("Code Salah")
        }

      })
      .catch((error) => {
        console.log("error");
         alert("Code Salah")
      });
  };


  return(
      <div
        style={{
          backgroundImage: `url(${imageHero})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: 721,
        }}
      >
        <section className="container pt-4">
          <div className="row align-center">
            <div className="col-auto pr-5" style={{ width: 500 }}>
              <h1 className="h2 line-height-1 mb-3 MatSaleh hero-poonya1">
                Here, <div style={{ color: "white" }}>it's all about fun</div>
              </h1>
              {/* <p className="mb-5 font-weight-light text-gray-500 w-75 mat-saleh">
SshowMostPicke            We provide what you need to enjoy your holiday with family. time to
            make another memorable moments.
          </p> */}
              <button className="btn px-3 start-photo" id= "pay-button" onClick={showMostPicked}>
                Start Photo
              </button>{" "}
              &nbsp;&nbsp;&nbsp;
              {/* <button className="btn px-3 booking-photo" id="book_button" onClick={pindah}>
                Booking Photo
              </button>{" "} */}
              <br />
              {/* <button id="test-button" onClick={test}>test buton</button> */}
              <br />
              <div>   


           <input type="text"  onChange={(e) => setInputRedeem(e.target.value)} placeholder="Do You have Coupon ?" className="codeInput"/>
                  <button className="btn-get-started redeemCode"    onClick={() => RedeemCode()}>Redeem</button>
              </div>
            </div>
          </div>
          </section>
        </div>
  );
}
