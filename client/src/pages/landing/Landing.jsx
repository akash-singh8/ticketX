import React from "react";
import NavBar from "../../components/navbar/NavBar";
import Hero from "../../components/hero/Hero";
import Sectionend from "../../components/sectionend/Sectionend";
import RaiseTicket from "../../components/raiseTicket/RaiseTicket";
import SuccessStories from "../../components/successStories/SuccessStories";
import Footer from "../../components/footer/Footer"
import "./landing.css";

function Landing() {
  return (<>
               <NavBar/>
               <Hero/>
               <Sectionend/>
               <RaiseTicket/>
               <Sectionend/>
               <SuccessStories/>
               <Footer/>

               
  </>);
}

export default Landing;
