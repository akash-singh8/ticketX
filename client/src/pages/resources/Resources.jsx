import React from 'react'
import Box from '../../components/box/Box'
import Footer from '../../components/footer/Footer'
import Navbar2 from '../../components/navbar2/Navbar2'

export default function Resources() {
  return (
    <>
    <Navbar2/>
    <section  className='gethelp-tickets raiseTicket'>
      <div className='heading'>
          <div>SELECT <br></br>
               <span>RESOURCES</span>CATEGORY</div>
      </div>
      <div className='ticket-box '>
          <Box ticketName='NEW TRAININGS'/>
          <Box  ticketName='INFORMATION ON PROGRAM'/>
          <Box  ticketName='RECORDING OF SESSIONS'/>
      </div>
  </section>
  <Footer/>
  </>
  )
}
