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
          
          {auth && auth.username==="admin" &&
          <>
             <Box ticketName='BUSINESS STRATEGY' link="/admin/business-strategy"  />
             <Box ticketName='MARKETING' link="/admin/marketing" />
             <Box ticketName='FINANCIAL MANAGEMENT' link="/admin/financial-management" />
             <Box ticketName='TECHNICAL SUPPORT' link="/admin/technical-support" />
             <Box ticketName='OPERATION & LOGISTICS' link="/admin/operation&logistics" />
             <Box ticketName='OTHERS'link="/admin/others" />
          </>}
        </div>
    </section>
    <Footer/>
    </>
  )
}
