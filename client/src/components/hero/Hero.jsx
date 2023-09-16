import React from "react";
import "./hero.css";
import hero from "../../assets/hero.jpg";
import SignUp from "../signUp/SignUp";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate=useNavigate()
  const authData = localStorage.getItem("user");
  const auth = JSON.parse(authData);
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
        {!auth && <SignUp styleName="hero-button" text="REGISTER NOW" />}
        {auth && auth.username==="client" && <>
        <div className="hero-button" onClick={handleClickServices}>RAISE TICKETS</div>
        </>}
        {auth && auth.username==="admin" && <>
        <div className="hero-button" onClick={viewRequests}>VIEW TICKETS</div>
        </>}
      </div>
      <div className="image-container">
        <img className="hero-image " src={hero} alt="hero"></img>
      </div>
    </section>
  );
}