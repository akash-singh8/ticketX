import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import Login from "../login/Login";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import profile from "../../assets/profile.png";
import { useModal } from "../modalProvider/Modalprovider";
import Otp from "../otp/Otp";

function NavBar() {
  const { openSignupModal, openLoginModal} = useModal();
  const navigate = useNavigate();
  const authData = localStorage.getItem("user");
  const auth = JSON.parse(authData);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleClickServices = () => {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById("services");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleClickStories = () => {
    window.open("https://imagineher.org/our-impact", "_blank");
  };

  const handleClickHome = () => {
    navigate("/");
  };

  const handleClickTicketHistory = () => {
    navigate("/ticket-history/requests");
  };

  const handleProfile = () => {
    navigate("/ticket-history");
  };


  return (
    <>
      <div className="Navbar">
        <div className="navigation web">
          <div>
            <div className="links web" onClick={handleClickHome}>
              Home
            </div>
            <div className="bar web"></div>
          </div>
          <div className="links web" onClick={handleClickServices}>
            Services
          </div>
          {auth ? (
            <div className="links web" onClick={handleClickTicketHistory}>
              Ticket History
            </div>
          ) : (
            <div className="links web" onClick={handleClickStories}>
              Impact
            </div>
          )}
        </div>
        <img className="company-logo" src={logo} alt="company-logo" />
        {authData ? (
          <>
            <div className="navigation profile-design" onClick={handleProfile}>
              <div className="email">{auth.email}</div>
              <img src={profile} alt="profile-pic" className="profile" />
            </div>
          </>
        ) : (
          <>
            <div className="navigation">
            <Login styleName="links" />
            <Otp/>
              <div className="button" onClick={openSignupModal}>
                SignUp
              </div>
            </div>
          </>
        )}
        <div
          className="mobile-menu-icon"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <FontAwesomeIcon icon={faBars} size="2x" />
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="mobile-dropdown">
          <div className="links" onClick={handleClickHome}>
            Home
          </div>
          <div className="links" onClick={handleClickServices}>
            Services
          </div>
          {auth ? (
            <div className="links" onClick={handleClickTicketHistory}>
              Ticket History
            </div>
          ) : (
            <div className="links" onClick={handleClickStories}>
              Impact
            </div>
          )}
          <div className="links" onClick={openLoginModal}>
            Login
          </div>
          <div className="links" onClick={openSignupModal}>
            SignUp
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;
