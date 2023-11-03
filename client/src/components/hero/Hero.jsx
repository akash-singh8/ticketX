import React from "react";
import "./hero.css";
import hero from "../../assets/hero.png";
import SignUp from "../signUp/SignUp";
import { useNavigate } from "react-router-dom";
import { useModal } from "../../modalProvider/Modalprovider";

export default function Hero() {
  const {openSignupModal,isAuthenticated,user} = useModal();
  const navigate=useNavigate()
  const handleClickServices = () => {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById("services");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };
  const viewRequests=()=>{
    navigate("/admin/requests")
  }
  return (
    <section id="hero">
      <div className="container1">
        <div className="hero-heading">
          TICKET <br></br>PORTAL
        </div>
        <div className="hero-details">
          Unleash the Power of Collaboration and Fuel Your Entrepreneurial
          Journey
        </div>
        <SignUp/>
        {!isAuthenticated && <div className="hero-button" text="REGISTER NOW" onClick={openSignupModal} >Register Now</div>}
        {isAuthenticated && user.role==="client" && <>
        <div className="hero-button" onClick={handleClickServices}>RAISE TICKETS</div>
        </>}
        {isAuthenticated && user.ticketResolved && <>
        <div className="hero-button" onClick={viewRequests}>VIEW TICKETS</div>
        </>}
      </div>
      <div className="image-container">
        <img className="hero-image " src={hero} alt="hero"></img>
      </div>
    </section>
  );
}
