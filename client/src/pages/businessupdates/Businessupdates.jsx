import React from 'react'
import Footer from '../../components/footer/Footer'
import NavBar from '../../components/navbar/NavBar'
import GethelpPopup from '../../components/gethelp/Gethelp'
import Box from '../../components/box/Box'
export default function Businessupdates() {
  const authData = localStorage.getItem("user");
  const auth = JSON.parse(authData);
  return (
    <>
      <NavBar/>
      <section  className='gethelp-tickets raiseTicket'>
        <div className='heading'>
            <div>SELECT CATEGORY <br></br>
                 FOR <span>BUSINESS UPDATES</span></div>
        </div>
        <div className='ticket-box '>
        {(!auth || (auth && auth.email==="client")) && 
        <>
            <GethelpPopup ticketName='NEW PRODUCT LAUNCH' cat="BUSINESS UPDATES"/>
            <GethelpPopup  ticketName='MARKETING'cat="BUSINESS UPDATES"/>
            <GethelpPopup  ticketName='EXPANSION OF BUSINESS'cat="BUSINESS UPDATES"/>
            <GethelpPopup  ticketName='REVENUE'cat="BUSINESS UPDATES"/>
            <GethelpPopup  ticketName='OTHERS'cat="BUSINESS UPDATES"/>
        </>}
        {auth && auth.email==="admin" && 
        <>
            <Box ticketName='NEW PRODUCT LAUNCH'link="/admin/new-product-launch"/>
            <Box  ticketName='MARKETING'link="/admin/marketing"/>
            <Box  ticketName='EXPANSION OF BUSINESS'link="/admin/expansion-of-business"/>
            <Box  ticketName='REVENUE'link="/admin/revenue"/>
            <Box  ticketName='OTHERS'link="/admin/others"/>
        </>}
           
        </div>
    </section>
    <Footer/>
    </>
  )
}
