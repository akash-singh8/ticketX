import React from 'react'
import "./profile.css"

import {useNavigate} from 'react-router-dom';

export default function Profile() {
  const navigate=useNavigate()
  const handleClickTicketHistory = () => {
    navigate("/ticket-history/requests");
  
};
  return (
    <>
    <div className='profile_page'>
        <div className='container-profile'>

        <div className='profile-details'>
        <div className='profile-img'></div>
            <div >
                <div className='name'>

                 <div className='title'>Name</div>
                 <div className='name-box'>UserName</div>
                </div>
                <div className='name'>
                 <div className='title'>Phone No</div>
                 <div className='name-box'>+91 82788XXXXXX</div>

                </div>
            </div>
          
        </div>
        <div className='buttons'>
            <div className='hero-button edit'>Edit Profile</div>
            <div className='hero-button edit'>LogOut</div>
        </div>
        </div>
        <div className="req-popup" onClick={handleClickTicketHistory}>
        Ticket History
      </div>
    </div>
    </>
  )
}
