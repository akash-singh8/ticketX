import React from 'react'

import Footer from '../../components/footer/Footer'
import NavBar from '../../components/navbar/NavBar'
import GethelpPopup from '../../components/gethelp/Gethelp'

export default function Resources() {
  return (
    <>
    <NavBar/>
    <section  className='gethelp-tickets raiseTicket'>
      <div className='heading'>
          <div>SELECT <br></br>
               <span>RESOURCES</span>CATEGORY</div>
      </div>
      <div className='ticket-box '>
          <GethelpPopup ticketName='NEW TRAININGS'/>
          <GethelpPopup  ticketName='INFORMATION ON PROGRAM'/>
          <GethelpPopup  ticketName='RECORDING OF SESSIONS'/>
      </div>
  </section>
  <Footer/>
  </>
  )
}
