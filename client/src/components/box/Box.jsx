import React,{useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './box.css';

export default function Box(props) {
  const { ticketName, specialStyle, openInPopup, onClick ,link} = props;
  const navigate =useNavigate()

  
  
  const handleClick = (event) => {
    if (openInPopup && onClick) {
      event.preventDefault(); 
      onClick(); 
    }
    else{
      navigate(link)
      window.scrollTo(0, 0);

    }
  };

  return (
    
      <div className={`box-container ${specialStyle ? 'helpbox' : ''}` } onClick={handleClick}>
        <div className='ticket-image'></div>
        <div className='ticket-name'>{ticketName}</div>
      </div>
    
  );
}

Box.defaultProps = {
  openInPopup: false,
};
