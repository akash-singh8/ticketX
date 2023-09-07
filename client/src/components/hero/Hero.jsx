import React from 'react'
import "./hero.css"
import hero from "../../assets/hero.jpg"
import SignUp from "../signUp/SignUp";
export default function Hero() {
  
  return (
    <section id='hero'>
        <div className='container1'>
          <div className='hero-heading'>TICKET <br></br>PORTAL</div>
          <div className='hero-details'>Unleash the Power of Collaboration and Fuel Your Entrepreneurial Journey</div>
          <SignUp styleName="hero-button" text="REGISTER NOW" />
        </div> 
        <div className='image-container'>
          <img className='hero-image 'src={hero}alt='hero'></img>
        </div>


    </section>
  )
}
