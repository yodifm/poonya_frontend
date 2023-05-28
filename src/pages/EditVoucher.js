import React, { Component } from 'react'

import EditVoucher from 'parts/EditVoucher'


export default class EditVoucher extends Component {
  render() {
    return (
      <>
     {/* <Header {...this.props}></Header> */}
     <EditVoucher data={EditVoucher.hero}></EditVoucher>
      </>
    )
  }
}
