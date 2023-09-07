import React from 'react'
import Box from '../../components/box/Box'
import Footer from '../../components/footer/Footer'
import NavBar from '../../components/navbar/NavBar'
import GethelpPopup from '../../components/gethelp/Gethelp'

export default function Resources() {
  const authData = localStorage.getItem("user");
  const auth = JSON.parse(authData);
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
      
      {auth && auth.username==="admin" &&
        <>
           <Box ticketName='NEW TRAININGS' link="/admin/new-trainings" />
             <Box ticketName='INFORMATION ON PROGRAM'link="/admin/information-on-program" />
             <Box ticketName='RECORDING OF SESSIONS'link="/admin/recording-of-sessions"/>
             
        </>
      }
      </div>
  </section>
  <Footer/>
  </>
  )
}
