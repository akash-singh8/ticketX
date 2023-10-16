import React,{useState} from 'react'
import "./profile.css"
import { useModal } from "../../modalProvider/Modalprovider";

import {useNavigate} from 'react-router-dom';

export default function Profile() {
  const {user,setLogout} = useModal();
  const navigate=useNavigate()
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({user});
  const handleClickTicketHistory = () => {
    navigate("/ticket-history/requests");
  
};
const determineUserRole=(email)=> {
  if (email.endsWith("@i-her.org")) {
    return "admin";
  } else {
    return "user";
  }
};
const logout = () => {
  setLogout()
  localStorage.clear();
  navigate('/');
};

const handleEditProfile=()=>{
  setIsEditing(true)
}

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setEditedUser({
    ...editedUser,
    [name]: value !== "" ? value : user[name],
  });
};

const handleProfileChanges = async () => {
  const authToken = localStorage.getItem('authorization');

  try {
    const role = await determineUserRole(editedUser.email); // Assuming determineUserRole is asynchronous

    let bodyData;
    if (role === "admin") {
      bodyData = {
        name: editedUser.name,
        email: editedUser.email,
      };
    } else {
      const location = document.querySelector("select").value; // Move this inside the else block
      bodyData = {
        name: editedUser.name,
        email: editedUser.email,
        location: location,
      };
    }

    const response = await fetch('http://localhost:3080/auth/profile-update', {
      method: 'POST',
      headers: {
        Authorization: authToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyData),
    });

    console.log(response);

    const data = await response.json();

    if (response.ok) {
      alert(data.message);
      window.location.reload();
    } else {
      console.error(`Failed to update profile changes: ${data.message}`);
    }
  } catch (err) {
    console.error('Error updating profile changes:', err);
  }

  setIsEditing(false);
  setEditedUser(user);
};

  return (
    <>
    <div className='profile_page'>
        <div className='container-profile'>

        <div className='profile-details'>
        <div className='profile-img'></div>
          {isEditing?<>
            <div >
                <div className='name'>

                 <div className='title'>Name</div>
                 <input className='name-box'
                 placeholder={user.name}
                 type="text"
                 name="name"
                 value={editedUser.name}
                 onChange={handleInputChange}/>
                 
                </div>
                <div className='name'>
                 <div className='title'>Email</div>
                 <input className='name-box'
                 placeholder={user.email}
                 type="email"
                 name="email"
                 value={editedUser.email}
                 onChange={handleInputChange}></input>

                </div>
                {user && user.role==="client" &&
                <div className='name'>
                 <div className='title'>Location</div>
                 <select
              className='name-box'
              name="location"
              placeholder={user.location}
              value={editedUser.location}
              onChange={handleInputChange}>
              <option value="Northern Region">Northern Region</option>
              <option value="Eastern Region">Eastern Region</option>
              <option value="Western Region">Western Region</option>
              <option value="South Western Region">South Western Region</option>
              <option value="West Nile">West Nile</option>
              <option value="Central Region">Central Region</option>
            </select>

                </div>
              }
            </div>
          </>:<>
          <div >
                <div className='name'>

                 <div className='title'>Name</div>
                 <div className='name-box'>{user.name}</div>
                </div>
                <div className='name'>
                 <div className='title'>Email</div>
                 <div className='name-box'>{user.email}</div>

                </div>
                {user && user.role==="client" &&
                <div className='name'>
                 <div className='title'>Location</div>
                 <div className='name-box'>{user.location}</div>

                </div>
                }
            </div>
          
          </>}  
          
        </div>
        <div className='buttons'>
          {isEditing?
          <>
            <div className='hero-button edit' onClick={handleProfileChanges}>Save Changes</div>
          </>
          :<>
          <div className='hero-button edit' onClick={handleEditProfile}>Edit Profile</div>
          </>
          }
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
