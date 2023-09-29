import React from 'react'
import Footer from '../../components/footer/Footer'
import NavBar from '../../components/navbar/NavBar'
import GethelpPopup from '../../components/gethelp/Gethelp'
import Box from '../../components/box/Box'
import Launch from "../../assets/New Product Launch.jpg"
import Marketing from "../../assets/Marketing.jpg"
import Expansion from "../../assets/1BSC8075 (2).JPG"
import Revenue from "../../assets/Revenue.jpg"
import Others from "../../assets/Others.JPG"
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
            <GethelpPopup ticketName='NEW PRODUCT LAUNCH' cat="BUSINESS UPDATES" image={Launch}/>
            <GethelpPopup  ticketName='MARKETING'cat="BUSINESS UPDATES"image={Marketing}/>
            <GethelpPopup  ticketName='EXPANSION OF BUSINESS'cat="BUSINESS UPDATES"image={Expansion}/>
            <GethelpPopup  ticketName='REVENUE'cat="BUSINESS UPDATES"image={Revenue}/>
            <GethelpPopup  ticketName='OTHERS'cat="BUSINESS UPDATES"image={Others}/>
        </>}
        {auth && auth.email==="admin" && 
        <>
            <Box ticketName='NEW PRODUCT LAUNCH'link="/admin/new-product-launch"image={Launch}/>
            <Box  ticketName='MARKETING'link="/admin/marketing"image={Marketing}/>
            <Box  ticketName='EXPANSION OF BUSINESS'link="/admin/expansion-of-business"image={Expansion}/>
            <Box  ticketName='REVENUE'link="/admin/revenue"image={Revenue}/>
            <Box  ticketName='OTHERS'link="/admin/others"image={Others}/>
        </>}
           
        </div>
    </section>
    <Footer/>
    </>
  )
}
