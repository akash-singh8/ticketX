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
        {auth.username==="client" && 
        <>
            <GethelpPopup ticketName='NEW PRODUCT LAUNCH'/>
            <GethelpPopup  ticketName='MARKETING'/>
            <GethelpPopup  ticketName='EXPANSION OF BUSINESS'/>
            <GethelpPopup  ticketName='REVENUE'/>
            <GethelpPopup  ticketName='OTHERS'/>
        </>}
        {auth && auth.username==="admin" && 
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
