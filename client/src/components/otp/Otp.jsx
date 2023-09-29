import Modal from "react-modal";
import styled from "styled-components";
import React, { useRef, useEffect, useState } from "react";
import { useModal } from "../modalProvider/Modalprovider";
import "./otp.css";
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
  height: 370px;
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
export default function Otp(props) {
  const { otpModalIsOpen, openLoginModal, openSignupModal, closeotpModal } =
    useModal();

  const modalRef = useRef();

  const [timer, setTimer] = useState(300);

  const handleBack = () => {
    resetTimer();
    closeotpModal();
    openSignupModal();
  };

  const handleVerify = (event) => {
    resetTimer();
    event.preventDefault();
    closeotpModal();
    openLoginModal();
  };

  const resetTimer = () => {
    setTimer(300);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const onTimeUp = () => {
    closeotpModal();
    console.log("Timer has reached zero!");
  };

  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        clearInterval(timerInterval);
        if (onTimeUp) {
          onTimeUp();
        }
      }
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, [timer, onTimeUp]);

  return (
    <div>
      <CustomModal
        isOpen={otpModalIsOpen}
        onRequestClose={closeotpModal}
        contentLabel="Login Modal"
        ariaHideApp={false}
      >
        <ModalContent ref={modalRef}>
          <h2 className="form-heading">Verify</h2>
          <h5 className="center">Time remaining : {formatTime(timer)}</h5>
          <form>
            <div class="otp-field mb-4">
              <input type="number" />
              <input type="number" />
              <input type="number" />
              <input type="number" />
              <input type="number" />
              <input type="number" />
            </div>
            <div className="buttons2">
              <div
                className="button login-button otp-button"
                onClick={handleBack}
                type="submit"
              >
                Go Back
              </div>
              <div
                className="button login-button otp-button"
                onClick={handleVerify}
                type="submit"
              >
                Verify
              </div>
            </div>
            <div className="new-account">Didn't receive a code? </div>
            <div className="forgotPass create-acc">Request again</div>
          </form>
        </ModalContent>
      </CustomModal>
    </div>
  );
}
