import React from 'react'
import Box from '../../components/box/Box'
import Footer from '../../components/footer/Footer'
import Navbar2 from '../../components/navbar2/Navbar2'

export default function Businessupdates() {
  return (
    <>
      <Navbar2/>
      <section  className='gethelp-tickets raiseTicket'>
        <div className='heading'>
            <div>SELECT CATEGORY <br></br>
                 FOR <span>BUSINESS UPDATES</span></div>
        </div>
        <div className='ticket-box '>
            <Box ticketName='NEW PRODUCT LAUNCH'/>
            <Box  ticketName='MARKETING'/>
            <Box  ticketName='EXPANSION OF BUSINESS'/>
            <Box  ticketName='REVENUE'/>
           
            <Box  ticketName='OTHERS'/>
        </div>
    </section>
    <Footer/>
    </>
  )
}
