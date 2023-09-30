import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
  const [signupModalIsOpen, setSignupModalIsOpen] = useState(false);
  const [otpModalIsOpen, setOtpModalIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const openLoginModal = () => {
    setLoginModalIsOpen(true);
  };

  const openOtpModal = () => {
    setOtpModalIsOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalIsOpen(false);
  };

  const closeOtpModal = () => {
    setOtpModalIsOpen(false);
  };

  const openSignupModal = () => {
    setSignupModalIsOpen(true);
  };

  const closeSignupModal = () => {
    setSignupModalIsOpen(false);
  };

  const contextValue = {
    openLoginModal,
    closeLoginModal,
    loginModalIsOpen,
    openSignupModal,
    closeSignupModal,
    signupModalIsOpen,
    otpModalIsOpen,
    openOtpModal,
    closeOtpModal,
    isAuthenticated,
    setIsAuthenticated,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}

export function useModal() {
  return useContext(AppContext);
}
