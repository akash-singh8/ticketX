import React from 'react'
import Box from '../../components/box/Box'
import Footer from '../../components/footer/Footer'
import NavBar from '../../components/navbar/NavBar'
import GethelpPopup from '../../components/gethelp/Gethelp'
import {useNavigate } from 'react-router-dom'

export default function Gethelp() {
  const authData = localStorage.getItem("user");
  const auth = JSON.parse(authData);
 
  const navigate =useNavigate()
  const toadmin=()=>{
             navigate("/admin")
  }
  return (
    <>
      <NavBar/>
      <section  className='gethelp-tickets raiseTicket'>
        <div className='heading'>
            <div>SELECT CATEGORY <br></br>
                 TO <span>GET HELP </span>WITH</div>
        </div>
        <div className='ticket-box '>
          {auth.username==="client" &&
          <>
            <GethelpPopup ticketName='BUSINESS STRATEGY'/>
            <GethelpPopup  ticketName='MARKETING'/>
            <GethelpPopup  ticketName='FINANCIAL MANAGEMENT'/>
            <GethelpPopup  ticketName='TECHNICAL SUPPORT'/>
            <GethelpPopup  ticketName='OPERATION & LOGISTICS'/>
            <GethelpPopup  ticketName='OTHERS'/>
          </>}
          {auth.username==="admin" &&
          <>
             <Box ticketName='BUSINESS STRATEGY' onClick={toadmin}  />
             <Box ticketName='MARKETING' onClick={toadmin} />
             <Box ticketName='FINANCIAL MANAGEMENT' onClick={toadmin} />
             <Box ticketName='TECHNICAL SUPPORT' onClick={toadmin} />
             <Box ticketName='OPERATION & LOGISTICS' onClick={toadmin} />
             <Box ticketName='OTHERS' onClick={toadmin} />
             
          </>}
        </div>
    </section>
    <Footer/>
    </>
  )
}
