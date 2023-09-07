import Modal from "react-modal";
import styled from "styled-components";
import React, { useState, useRef, useEffect } from "react";
import "./signUp.css";

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
export default function SignUp(props) {
  const {styleName,text}=props
  
  const modalRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    number: "",
    Confirmpassword: "",
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
    //add further logic here, like sending the form data to a server.

    // Clear the form data after submission
    setFormData({
      username: "",
      password: "",
    });
  };
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    const handleModalClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };
    document.addEventListener("mousedown", handleModalClick);
    return () => {
      document.removeEventListener("mousedown", handleModalClick);
    };
  }, []);

  return (
    <div>
      <div className={styleName} onClick={openModal}>
        {text ? text :'SignUp'}
      </div>

      <CustomModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Login Modal"
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
            <div className="forgotPass create-acc">Login</div>
          </form>
        </ModalContent>
      </CustomModal>
    </div>
  );
}
