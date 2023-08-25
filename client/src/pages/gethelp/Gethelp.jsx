import React from 'react'
import Box from '../../components/box/Box'
import Footer from '../../components/footer/Footer'
import Navbar2 from '../../components/navbar2/Navbar2'

export default function Gethelp() {
  return (
    <>
      <Navbar2/>
      <section  className='gethelp-tickets raiseTicket'>
        <div className='heading'>
            <div>SELECT CATEGORY <br></br>
                 TO <span>GET HELP </span>WITH</div>
        </div>
        <div className='ticket-box '>
            <Box ticketName='BUSINESS STRATEGY'/>
            <Box  ticketName='MARKETING'/>
            <Box  ticketName='FINANCIAL MANAGEMENT'/>
            <Box  ticketName='TECHNICAL SUPPORT'/>
            <Box  ticketName='OPERATION & LOGISTICS'/>
            <Box  ticketName='OTHERS'/>
        </div>
    </section>
    <Footer/>
    </>
  )
}
