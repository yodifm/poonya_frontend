import React, { Component } from 'react'

import FormLogin from 'parts/FormLogin'


export default class LoginPage extends Component {
  render() {
    return (
      <>
     {/* <Header {...this.props}></Header> */}
     <FormLogin data={LoginPage.hero}></FormLogin>
      </>
    )
  }
}
