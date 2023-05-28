import React from "react";

import BrandIcon from "parts/IconText";
import react, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Axios from "axios";
import { Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import * as api from "api/index.js";

const initState = {
  username: "",
  password: "",
};

function randomString(len, charSet) {
  charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  var randomString = '';
  for (var i = 0; i < len; i++) {
      var randomPoz = Math.floor(Math.random() * charSet.length);
      randomString += charSet.substring(randomPoz,randomPoz+1);
  }
  return randomString;
}

export default function FormLogin(props) {
  const history = useHistory();
  const [form, setForm] = useState(initState);
  const DashboardPage = () => {
    console.log(form);
    var username_data = { username: form.username };
    console.log(username_data);
    // var username_data =  form.username
    api.getuserbyusername(form.username).then((res) => {
      console.log(res);
      if (res.data.roles === "admin") {
        if (res.data.password === form.password) {
          localStorage.setItem('access_token',randomString(10))
          console.log("dashboard", history)
          history.push("Dashboard")
          history.go()
        } else {
          alert("wrong password, please try again")
        }
      } else {
       alert("you are not admin");
      }
      console.log(res.data);
     
    });

    // history.push("/Dashboard")
  };

  function pindah(){
    history.push("Dashboard")
    //  window.open('http://localhost:1500/api/start?mode=print&password=bP_A6u6sKblbviUR','_blank').focus();
  }


  return (
    
    <div className="wrapper">
      
      <form className="form-signin">
        <h2 className="form-signin-heading">Admin Poonya</h2>
        <input
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          type="text"
          className="form-control"
          name="username"
          placeholder="Email Address"
          required=""
        />{" "}
        <br />
        <input
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          type="password"
          className="form-control"
          name="password"
          placeholder="Password"
          required=""
        />
        <button
          onClick={DashboardPage}
          className="btn btn-lg btn-primary btn-block"
          type="button"
        >
          Login
        </button>
        <button
          onClick={pindah}
          className="btn btn-lg btn-primary btn-block"
          type="button"
        >
          Langsung Link
        </button>
       
      </form>
      
    </div>
  );
}
