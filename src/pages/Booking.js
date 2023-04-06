import React, { Component } from 'react'

import Booking from 'parts/Booking'


export default class Booking extends Component {
  render() {
    return (
      <>
     {/* <Header {...this.props}></Header> */}
     <Booking data={Booking.hero}></Booking>
      </>
    )
  }
}
