import React from 'react';
import "./box.css"

export default function Box(props) {
    const ticketName = props.ticketName;

    return (
        <div className='box-container'>
            <div className='ticket-image'></div>
            <div className='ticket-name'>{ticketName}</div>
        </div>
    );
}
