import React from 'react'
import Box from '../../components/box/Box'
import Footer from '../../components/footer/Footer'
import NavBar from '../../components/navbar/NavBar'
import GethelpPopup from '../../components/gethelp/Gethelp'

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
