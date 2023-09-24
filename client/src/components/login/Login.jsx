import Modal from "react-modal";
import styled from "styled-components";
import React, { useState, useRef, useEffect } from "react";
import { useModal } from "../modalProvider/Modalprovider";
import "./login.css";

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
  height: 550px;
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
export default function Login(props) {
  const { openSignupModal, loginModalIsOpen, closeLoginModal, openLoginModal } =
    useModal();
  const { styleName, text } = props;
  const modalRef = useRef();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:3080/auth/login?role=user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.status === 200) {
        localStorage.setItem("authorization", `Bearer ${data.authToken}`);
        alert(data.message);
      } else {
        throw new Error(data.message);
      }
    } catch (err) {
      console.log("Error during signup");
      alert(err);
    }

    // console.log(formData);
    // localStorage.setItem("user", JSON.stringify(formData))
    // window.location.reload();

    closeLoginModal();

    setFormData({
      email: "",
      password: "",
    });
  };

  useEffect(() => {
    const handleModalClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeLoginModal();
      }
    };
    document.addEventListener("mousedown", handleModalClick);
    return () => {
      document.removeEventListener("mousedown", handleModalClick);
    };
  }, []);

  const handleSignup = () => {
    closeLoginModal();
    openSignupModal();
  };

  return (
    <div>
      <div className={styleName} onClick={openLoginModal}>
        {text ? text : "Login"}
      </div>

      <CustomModal
        isOpen={loginModalIsOpen}
        onRequestClose={closeLoginModal}
        contentLabel="Login Modal"
        ariaHideApp={false}>
        <ModalContent ref={modalRef}>
          <h2 className="form-heading">Login</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter your email*"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter your password*"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <div className="forgotPass">Forgot Password?</div>
            <div
              className="button login-button"
              onClick={handleSubmit}
              type="submit">
              Login
            </div>
            <div className="new-account">Don't have an account yet? </div>
            <div className="forgotPass create-acc" onClick={handleSignup}>
              Create an account
            </div>
          </form>
        </ModalContent>
      </CustomModal>
    </div>
  );
}
