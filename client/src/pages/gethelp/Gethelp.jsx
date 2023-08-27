import React from 'react'
import Box from '../../components/box/Box'
import Footer from '../../components/footer/Footer'
import Navbar2 from '../../components/navbar2/Navbar2'
import GethelpPopup from '../../components/gethelp/Gethelp'

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
            <GethelpPopup ticketName='BUSINESS STRATEGY'/>
            <GethelpPopup  ticketName='MARKETING'/>
            <GethelpPopup  ticketName='FINANCIAL MANAGEMENT'/>
            <GethelpPopup  ticketName='TECHNICAL SUPPORT'/>
            <GethelpPopup  ticketName='OPERATION & LOGISTICS'/>
            <GethelpPopup  ticketName='OTHERS'/>
        </div>
    </section>
    <Footer/>
    </>
  )
}
