import React from 'react'
import "./profile.css"
import Ticketpopup from '../ticket-popup/Ticket_popup'
export default function Profile() {
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
        <Ticketpopup styleName="req-popup"/>
    </div>
    </>
  )
}
