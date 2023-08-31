import React from 'react';
import { Link } from 'react-router-dom';
import './box.css';

export default function Box(props) {
  const { ticketName, specialStyle, openInPopup, onClick } = props;
  const linkPath = `/${ticketName.toLowerCase().replace(' ', '-')}`;

  const linkProps = {
    className: "box-link",
    target: openInPopup ? '_blank' : '_self',
    rel: openInPopup ? 'noopener noreferrer' : undefined,
  };

  const handleClick = (event) => {
    if (openInPopup && onClick) {
      event.preventDefault(); 
      onClick(); 
    }
  };

  return (
    <Link to={linkPath} {...linkProps} onClick={handleClick}>
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
