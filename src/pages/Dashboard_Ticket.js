import React, { Component } from 'react'

import Record_Ticket from 'parts/Record_Ticket'


export default class Dashboard_Ticket extends Component {
  render() {
    return (
      <>
     {/* <Header {...this.props}></Header> */}
     <Record_Ticket data={Dashboard_Ticket.hero}></Record_Ticket>
      </>
    )
  }
}
