import React from 'react';
import "./navbar.css";
import logo from "../../assets/logo.png";

function NavBar() {
  const handleClickServices= () => {
    const element =document.getElementById('services')
    element.scrollIntoView({behavior: 'smooth'});
  };
  const handleClickStories= () => {
    const element =document.getElementById('stories')
    element.scrollIntoView({behavior: 'smooth'});
  };
  const handleClickHome= () => {
    const element =document.getElementById('hero')
    element.scrollIntoView({behavior: 'smooth'});
  };
  
  
  return (
    <div className='Navbar'>
      <div className='navigation'>
        <div>

        <div className='links' onClick={handleClickHome}>Home</div>
        <div className='bar'></div>
        </div>
        <div className='links web'onClick={handleClickServices}>Services</div>
        <div className='links web'onClick={handleClickStories}>Stories</div>
      </div>
      <img className='logo web' src={logo} alt='company-logo'></img>
      <div className='navigation'>
        <div className='links web-2'>Login</div>
        <div className='button'>Signin</div>

      </div>
    </div>
  )
}

export default NavBar