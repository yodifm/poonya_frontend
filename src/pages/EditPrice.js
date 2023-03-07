import React, { Component } from 'react'

import EditPrice from 'parts/EditPrice'


export default class EditPrice extends Component {
  render() {
    return (
      <>
     {/* <Header {...this.props}></Header> */}
     <EditPrice data={EditPrice.hero}></EditPrice>
      </>
    )
  }
}
