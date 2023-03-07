import React, { Component } from 'react'

import Record_Sales from 'parts/Record_Sales'


export default class Dashboard_Sales extends Component {
  render() {
    return (
      <>
     {/* <Header {...this.props}></Header> */}
     <Record_Sales data={Dashboard_Sales.hero}></Record_Sales>
      </>
    )
  }
}
