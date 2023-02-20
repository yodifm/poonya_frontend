import React, { Component } from 'react'

import FormLogin from 'parts/FormLogin'
import * as api from "api/index.js"


export default class LoginPage extends Component {
  render() {

    // api.getuserbyusername("testdummy5").then(res => {
    //   console.log(res)
    // })
    return (
      <>
     {/* <Header {...this.props}></Header> */}
     <FormLogin data={LoginPage.hero}></FormLogin>
      </>
    )
  }
}
