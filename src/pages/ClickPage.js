import React, { Component } from 'react'

import Click from 'parts/Click'


export default class ClickPage extends Component {
  render() {
    return (
      <>
     {/* <Header {...this.props}></Header> */}
     <Click data={ClickPage.Click}></Click>
      </>
    )
  }
}
