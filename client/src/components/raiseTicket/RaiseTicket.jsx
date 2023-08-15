import React from 'react'
import "./raiseTicket.css"
import Box from '../box/Box'

export default function RaiseTicket() {
  return (
    <section className='raiseTicket' id='services'>
        <div className='heading'>
            <div>SELECT CATEGORY <br></br>
                 TO <span>RAISE TICKET</span></div>
        </div>
        <div className='ticket-box'>
            <Box ticketName='RESOURCES'/>
            <Box ticketName='BUSINESS UPDATES'/>
            <Box ticketName='GET HELP'/>
        </div>
    </section>
  )
}
