import Modal from "react-modal";
import styled from "styled-components";
import React, { useState, useRef, useEffect } from "react";
import Box from '../box/Box'
import './gethelp.css'
import { useNavigate } from "react-router-dom";
import SignUp from "../signUp/SignUp";

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

export default function Gethelp(props) {
  const navigate =useNavigate();
    const ticketName=props.ticketName
    const authData = localStorage.getItem("user");
    const auth = JSON.parse(authData);
  const modalRef = useRef();
  const [formData, setFormData] = useState({
   request:" "
  });

  const handleChange = (event) => {

    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    if(!auth){
         navigate()
    }

    // Clear the form data after submission
    setFormData({
        request:" "
    });
  };
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent form submission on Enter key press
    }
  };

  return (
    <><Box ticketName={ticketName} onClick={openModal} openInPopup={true}/>

  <CustomModal
    isOpen={modalIsOpen}
    
    contentLabel="Login Modal"
    ariaHideApp={false}
  >
    <ModalContent ref={modalRef}>
      <div className="form-heading-signUp">GET HELP</div>
      <form className="signup-form">
        
      <div>{`>`} {ticketName}</div>
      
        <textarea
          type="text"
          placeholder="Write concise description of your request for assistance with business strategy"
          id="request"
          name="request"
          onKeyDown={handleKeyDown}
          value={formData.request}
          onChange={handleChange}
          required
        />
        {!auth ? 
        <>
           <SignUp text="Submit Request" styleName="button login-button request-button"/>
        </>:<>
        <div
          className="button login-button request-button"
          onClick={handleSubmit}
          type="submit"
        >
          Submit Request
        </div>
        </>}
        <div className="new-account request-back" onClick={closeModal}>Go Back</div>
        
      </form>
    </ModalContent>
  </CustomModal></>
  )
}
