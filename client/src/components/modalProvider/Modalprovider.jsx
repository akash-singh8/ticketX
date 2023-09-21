import React, { createContext, useContext, useState } from "react";
const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [loginModalIsOpen, setloginModalIsOpen] = useState(false);
  const [signupModalIsOpen, setsignupModalIsOpen] = useState(false);
  const [otpModalIsOpen, setotpModalIsOpen] = useState(false);

  const openLoginModal = () => {
    setloginModalIsOpen(true);
  };
  const openotpModal = () => {
    setotpModalIsOpen(true);
  };

  const closeLoginModal = () => {
    setloginModalIsOpen(false);
  };
  const closeotpModal = () => {
    setotpModalIsOpen(false);
  };
  const openSignupModal = () => {
    setsignupModalIsOpen(true);
  };

  const closeSignupModal = () => {
    setsignupModalIsOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        openLoginModal,
        closeLoginModal,
        loginModalIsOpen,
        openSignupModal,
        closeSignupModal,
        signupModalIsOpen,
        otpModalIsOpen,
        openotpModal,
        closeotpModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}
