import React from 'react';
import { Link } from 'react-router-dom';
import './box.css';

export default function Box(props) {
  const { ticketName, specialStyle, openInPopup, onClick ,link} = props;
  

 

  const handleClick = (event) => {
    if (openInPopup && onClick) {
      event.preventDefault(); 
      onClick(); 
    }
  };

  return (
    <Link to={link} onClick={handleClick}>
      <div className={`box-container ${specialStyle ? 'helpbox' : ''}`}>
        <div className='ticket-image'></div>
        <div className='ticket-name'>{ticketName}</div>
      </div>
    </Link>
  );
}

Box.defaultProps = {
  openInPopup: false,
};
