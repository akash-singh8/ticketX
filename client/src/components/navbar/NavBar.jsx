import React,{useState} from 'react';
import "./navbar.css";
import logo from "../../assets/logo.png";
import Login from '../login/Login';
import SignUp from '../signUp/SignUp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    <>
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
      <Login styleName='links'/>
      <SignUp styleName='button'/>
      </div>
      <div className='mobile-menu-icon' onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
      <FontAwesomeIcon icon={faBars} size='2x' />
      </div>
        
    </div>
      {mobileMenuOpen && (
        <div className='mobile-dropdown'>
            <div className='links' onClick={handleClickHome}>Home</div>
            <div className='links' onClick={handleClickServices}>Services</div>
            <div className='links' onClick={handleClickStories}>Stories</div>
            <Login styleName='links'/>
            <SignUp styleName='links'/>
          </div>
        )}
        

        </>
  )
}

export default NavBar