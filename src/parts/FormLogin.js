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
          history.push("Dashboard");
          history.go(0);
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
          onClick={() => DashboardPage()}
          className="btn btn-lg btn-primary btn-block"
          type="button"
        >
          Login
        </button>
       
      </form>
      
    </div>
  );
}
