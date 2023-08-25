import React from 'react'
import NavBar from '../../components/navbar/NavBar'
import Box from '../../components/box/Box'
import Footer from '../../components/footer/Footer'

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
