import Modal from "react-modal";
import styled from "styled-components";
import React, { useState, useRef, useEffect } from "react";
import "./signUp.css";
import Otp from "../otp/Otp";
import { useModal } from "../modalProvider/Modalprovider";

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
  width: 500px;
  z-index:1000;
  position: fixed;
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
export default function SignUp() {
  
  const {signupModalIsOpen,closeSignupModal,openLoginModal,openotpModal} = useModal();
  const modalRef = useRef();
 
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    number: "",
    Confirmpassword: "",
    location: "",
  });
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    closeSignupModal();
    openotpModal();
    //openLoginModal();
    //event.preventDefault();
    console.log(formData);
    //add further logic here, like sending the form data to a server.
    //console.log(openLoginModal);
    // Clear the form data after submission
    setFormData({
      username: "",
      password: "",
    });
  };
  
 

  useEffect(() => {
    const handleModalClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeSignupModal();
      }
    };
    document.addEventListener("mousedown", handleModalClick);
    return () => {
      document.removeEventListener("mousedown", handleModalClick);
    };
  }, []);

  const handleLogin=()=>{
    closeSignupModal();
    openLoginModal();
  }
  return (
    <div>
        {/* <div className={styleName} onClick={openSignupModal}>
        {text ? text : "SignUp"}
      </div> */}
       
      <CustomModal
        isOpen={signupModalIsOpen}
        onRequestClose={closeSignupModal}
        contentLabel="SignUp Modal"
        ariaHideApp={false}
      >
        <ModalContent ref={modalRef}>
          <div className="form-heading-signUp">SignUp</div>
          <form className="signup-form">
            <label className="signUp" htmlFor="username">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name*"
              id="MobileNo"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label className="signUp" htmlFor="username">
              Mobile No.
            </label>
            <input
              type="text"
              placeholder="Enter your mobile number*"
              id="username"
              name="number"
              value={formData.number}
              onChange={handleChange}
              required
            />
            <label htmlFor="dropdown">Location:</label>
            <select
              id="dropdown"
              name="location"
              value={formData.location}
             
            >
              <option value="Northern Region">Northern Region</option>
              <option value="Eastern Region">Eastern Region</option>
              <option value="Western Region">Western Region</option>
              <option value="South Western Region">South Western Region</option>
              <option value="West Nile">West Nile</option>
              <option value="Central Region">Central Region</option>
            </select>

            <label htmlFor="password" className="signUp">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password*"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <label htmlFor="password" className="signUp">
              Password
            </label>
            <input
              type="password"
              placeholder="Confirm your password*"
              id="passwordConfirm"
              name="Confirmpassword"
              value={formData.Confirmpassword}
              onChange={handleChange}
              required
            />
            <div className="forgotPass">Forgot Password?</div>
            <div
              className="button login-button"
              onClick={handleSubmit}
              type="submit"
            >
              SignUp
            </div>
            <div className="new-account">Already have an account? </div>
            <div className="forgotPass create-acc" onClick={handleLogin} >LogIn</div>
          </form>
        </ModalContent>
      </CustomModal>
    </div>
  );
}
