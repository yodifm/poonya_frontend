import React, { Component } from 'react'

import Record from 'parts/Record'


export default class Dashboard extends Component {
  render() {
    return (
      <>
     {/* <Header {...this.props}></Header> */}
     <Record data={Dashboard.hero}></Record>
      </>
    )
  }
}
