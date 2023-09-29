import React from 'react'
import Box from '../../components/box/Box'
import Footer from '../../components/footer/Footer'
import NavBar from '../../components/navbar/NavBar'
import GethelpPopup from '../../components/gethelp/Gethelp'
import BusinessStrategy from "../../assets/Business Strategy.JPG"
import Marketing from "../../assets/Marketing.jpg"
import FinManagement from "../../assets/Financial Management.jpg"
import TechSupport from "../../assets/Technical Support.JPG"
import Others from "../../assets/Others.JPG"
import Operations from "../../assets/Operational Costs & Logistics.JPG"


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
            <GethelpPopup ticketName='BUSINESS STRATEGY' cat="GET HELP" image={BusinessStrategy}/>
            <GethelpPopup  ticketName='MARKETING'cat="GET HELP" image={Marketing}/>
            <GethelpPopup  ticketName='FINANCIAL MANAGEMENT'cat="GET HELP"image={FinManagement}/>
            <GethelpPopup  ticketName='TECHNICAL SUPPORT'cat="GET HELP" image={TechSupport}/>
            <GethelpPopup  ticketName='OPERATION & LOGISTICS'cat="GET HELP" image={Operations}/>
            <GethelpPopup  ticketName='OTHERS'cat="GET HELP" image={Others}/>
          </>}
          { auth && auth.email==="admin" &&
          <>
             <Box ticketName='BUSINESS STRATEGY' link="/admin/business-strategy" image={BusinessStrategy} />
             <Box ticketName='MARKETING' link="/admin/marketing" image={Marketing}/>
             <Box ticketName='FINANCIAL MANAGEMENT' link="/admin/financial-management"image={FinManagement} />
             <Box ticketName='TECHNICAL SUPPORT' link="/admin/technical-support" image={TechSupport}/>
             <Box ticketName='OPERATION & LOGISTICS' link="/admin/operation&logistics"image={Operations} />
             <Box ticketName='OTHERS'link="/admin/others" image={Others} />
          </>}
        </div>
    </section>
    <Footer/>
    </>
  )
}
