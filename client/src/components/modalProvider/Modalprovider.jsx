import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
  const [signupModalIsOpen, setSignupModalIsOpen] = useState(false);
  const [otpModalIsOpen, setOtpModalIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  const openLoginModal = () => {
    setLoginModalIsOpen(true);
  };

  const openotpModal = () => {
    setOtpModalIsOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalIsOpen(false);
  };

  const closeotpModal = () => {
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
    openotpModal,
    closeotpModal,
    isAuthenticated,
    setIsAuthenticated,
    user,
    setUser
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
