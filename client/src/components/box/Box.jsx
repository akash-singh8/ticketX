import React from 'react';
import { Link } from 'react-router-dom'; 
import './box.css';

export default function Box(props) {
  const ticketName = props.ticketName;
  const linkPath = `/${ticketName.toLowerCase().replace(' ', '-')}`; 

  return (
    <Link to={linkPath} className="box-link"> 
      <div className='box-container'>
        <div className='ticket-image'></div>
        <div className='ticket-name'>{ticketName}</div>
      </div>
    </Link>
  );
}
