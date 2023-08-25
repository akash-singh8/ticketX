import React from 'react'
import NavBar from '../../components/navbar/NavBar'
import Box from '../../components/box/Box'

export default function Gethelp() {
  return (
    <>
      <NavBar/>
      <section  className='gethelp-tickets raiseTicket'>
        <div className='heading'>
            <div>SELECT CATEGORY <br></br>
                 TO <span>GET HELP </span>WITH</div>
        </div>
        <div className='ticket-box '>
            <Box ticketName='GET HELP'/>
            <Box  ticketName='BUSINESS UPDATES'/>
            <Box  ticketName='RESOURCES'/>
            <Box  ticketName='RESOURCES'/>
            <Box  ticketName='RESOURCES'/>
            <Box  ticketName='RESOURCES'/>
        </div>
    </section>
    </>
  )
}
