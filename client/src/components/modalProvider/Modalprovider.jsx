import React, { createContext, useContext, useState } from "react";
const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [loginModalIsOpen, setloginModalIsOpen] = useState(false);
  const [signupModalIsOpen, setsignupModalIsOpen] = useState(false);
  const [reqModalIsOpen, setreqModalIsOpen] = useState(false);

  const openLoginModal = () => {
    setloginModalIsOpen(true);
  };
  const openreqModal = () => {
    setreqModalIsOpen(true);
  };

  const closeLoginModal = () => {
    setloginModalIsOpen(false);
  };
  const closereqModal = () => {
    setreqModalIsOpen(false);
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
        reqModalIsOpen,
        openreqModal,
        closereqModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}
