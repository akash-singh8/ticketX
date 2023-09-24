import React from 'react'
import Box from '../../components/box/Box'
import Footer from '../../components/footer/Footer'
import NavBar from '../../components/navbar/NavBar'
import GethelpPopup from '../../components/gethelp/Gethelp'


export default function Gethelp() {
  const authData = localStorage.getItem("user");
  const auth = JSON.parse(authData);
 
  
  
  return (
    <>
      <NavBar/>
      <section  className='gethelp-tickets raiseTicket'>
        <div className='heading'>
            <div>SELECT CATEGORY <br></br>
                 TO <span>GET HELP </span>WITH</div>
        </div>
        <div className='ticket-box '>

          {(!auth || (auth && auth.email==="client")) &&
          <>
            <GethelpPopup ticketName='BUSINESS STRATEGY' cat="GET HELP"/>
            <GethelpPopup  ticketName='MARKETING'cat="GET HELP"/>
            <GethelpPopup  ticketName='FINANCIAL MANAGEMENT'cat="GET HELP"/>
            <GethelpPopup  ticketName='TECHNICAL SUPPORT'cat="GET HELP"/>
            <GethelpPopup  ticketName='OPERATION & LOGISTICS'cat="GET HELP"/>
            <GethelpPopup  ticketName='OTHERS'cat="GET HELP"/>
          </>}
          { auth && auth.email==="admin" &&
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
