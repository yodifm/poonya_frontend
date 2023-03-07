import React, { Component } from 'react'

import TestCode from 'parts/TestCode'


export default class TestCode extends Component {
  render() {
    return (
      <>
     {/* <Header {...this.props}></Header> */}
     <TestCode data={TestCode.hero}></TestCode>
      </>
    )
  }
}
