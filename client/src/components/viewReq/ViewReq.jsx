import Modal from "react-modal";
import styled from "styled-components";
import React, { useState, useRef } from "react";

import "./viewReq.css";
import { useNavigate } from "react-router-dom";
import profile from "../../assets/profile.png";

const CustomModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const ModalContent = styled.div`
  width: 700px;

  flex-shrink: 0;
  border-radius: 16.477px;
  background: #fff;
  box-shadow: 0px 4px 28px 0px rgba(0, 0, 0, 0.16);
  background-color: #fff;
  padding: 20px;
  border: 1px solid #888;
  border-radius: 8px;
  display: block;
`;

export default function ViewReq() {
  const navigate = useNavigate();
  
  const authData = localStorage.getItem("user");
  const auth = JSON.parse(authData);
  const modalRef = useRef();
 

  

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (!auth) {
      navigate();
    }

    
  };
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };



  return (
    <>
      <div className="container2-req" onClick={openModal}>
        <div className="view-button">View</div>
      </div>

      <CustomModal
        isOpen={modalIsOpen}
        contentLabel="View Req Modal"
        ariaHideApp={false}
      >
        <ModalContent ref={modalRef}>
          <div className="user-details">
            <div className="profile-pic">
              <img src={profile} alt="profilepic" className="profile pic" />
              <div className="user-deatils">
                <div className="name-admin">Name : {auth.username}</div>
                <div className="number">Phone Number : </div>
              </div>
            </div>
            <div className="date">
              Raised on <br></br> <span>21 July, 2021</span>
            </div>
          </div>
          <div className="text"></div>
          <div className="checkbox">
            <input type="checkbox" />
            <div>Started Review</div>
          </div>
          <div className="button login-button request-button">Mark as Resolved</div>

          <div className="new-account request-back center" onClick={closeModal}>
            Go Back
          </div>
        </ModalContent>
      </CustomModal>
    </>
  );
}
