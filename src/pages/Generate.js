import React, { Component } from 'react'

// import Voucher from 'parts/Voucher'
import TestCode from 'parts/TestCode'


export default class Generate extends Component {
  render() {
    return (
      <>
     {/* <Header {...this.props}></Header> */}
     <TestCode data={Generate.hero}></TestCode>
      </>
    )
  }
}
