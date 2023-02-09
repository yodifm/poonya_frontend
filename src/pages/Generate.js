import React, { Component } from 'react'

import Voucher from 'parts/Voucher'


export default class Generate extends Component {
  render() {
    return (
      <>
     {/* <Header {...this.props}></Header> */}
     <Voucher data={Generate.hero}></Voucher>
      </>
    )
  }
}
