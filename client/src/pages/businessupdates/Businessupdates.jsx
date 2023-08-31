import React from 'react'
import Box from '../../components/box/Box'
import Footer from '../../components/footer/Footer'
import Navbar2 from '../../components/navbar2/Navbar2'
import GethelpPopup from '../../components/gethelp/Gethelp'

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
            <GethelpPopup ticketName='NEW PRODUCT LAUNCH'/>
            <GethelpPopup  ticketName='MARKETING'/>
            <GethelpPopup  ticketName='EXPANSION OF BUSINESS'/>
            <GethelpPopup  ticketName='REVENUE'/>
           
            <GethelpPopup  ticketName='OTHERS'/>
        </div>
    </section>
    <Footer/>
    </>
  )
}
