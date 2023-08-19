import React from 'react';
import "./navbar.css";
import logo from "../../assets/logo.png";
import Login from '../login/Login';
import SignUp from '../signUp/SignUp';

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
      <div className='navigation web'>
        <div>

        <div className='links web' onClick={handleClickHome}>Home</div>
        <div className='bar web'></div>
        </div>
        <div className='links web'onClick={handleClickServices}>Services</div>
        <div className='links web'onClick={handleClickStories}>Stories</div>
      </div>
      <img className='logo ' src={logo} alt='company-logo'></img>
      <div className='navigation'>
      <Login/>
      <SignUp/>
        
        

      </div>
    </div>
  )
}

export default NavBar