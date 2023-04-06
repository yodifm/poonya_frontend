import React, { Component } from 'react'

import FormLogin from 'parts/FormLogin'
import * as api from "api/index.js"
import { Redirect, Route, Switch, useHistory } from 'react-router-dom'


 const LoginPage = () => {
  const history = useHistory()
  console.log(localStorage.getItem("access_token"))
  if(localStorage.getItem("access_token")){
    history.push('Dashboard')
    history.go()
  }else{
    return (
        // <h1>Tdsfds</h1>
        <FormLogin data={LoginPage.hero}></FormLogin>
      );
  }
}

export default LoginPage;