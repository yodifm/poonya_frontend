import React from "react";

import BrandIcon from "parts/IconText";

export default function FormLogin(props) {

  return (
    <div class="wrapper">
    <form class="form-signin">       
      <h2 class="form-signin-heading">Admin Poonya</h2>
      <input type="text" class="form-control" name="username" placeholder="Email Address" required="" autofocus="" /> <br/>
      <input type="password" class="form-control" name="password" placeholder="Password" required=""/>      
     
      <button class="btn btn-lg btn-primary btn-block" type="submit">Login</button>   
    </form>
  </div>


      );
     
  
}
