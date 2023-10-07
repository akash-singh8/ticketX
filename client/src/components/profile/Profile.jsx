import React from 'react'
import "./profile.css"
import { useModal } from "../../modalProvider/Modalprovider";

import {useNavigate} from 'react-router-dom';

export default function Profile() {
  const {user,setLogout} = useModal();
  const navigate=useNavigate()
  const handleClickTicketHistory = () => {
    navigate("/ticket-history/requests");
  
};

const logout = () => {
  setLogout()
  localStorage.clear();
  navigate('/');
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
                 <div className='name-box'>{user.name}</div>
                </div>
                <div className='name'>
                 <div className='title'>Email</div>
                 <div className='name-box'>{user.email}</div>

                </div>
            </div>
          
        </div>
        <div className='buttons'>
            <div className='hero-button edit'>Edit Profile</div>
            <div className='hero-button edit' onClick={logout}>LogOut</div>
        </div>
        </div>
        <div className="req-popup" onClick={handleClickTicketHistory}>
        Ticket History
      </div>
    </div>
    </>
  )
}
