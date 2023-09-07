import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import Login from "../login/Login";
import SignUp from "../signUp/SignUp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function NavBar() {
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
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById("stories");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
    
  };
  const handleClickHome = () => {
    navigate("/");
  };
  const handleClickTicketHistory=()=>{
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
          {auth ?
          <div className="links web"  onClick={handleClickTicketHistory}>Ticket History</div>
        :
          <div className="links web" onClick={handleClickStories}>
            Stories
          </div>}
        </div>
        <img className="company-logo " src={logo} alt="company-logo"></img>
        {authData ? (
          <>
            <div className="navigation profile-design">
              <div className="username">{auth.username}</div>
              <div className="profile"></div>
            </div>
          </>
        ) : (
          <>
            <div className="navigation">
              <Login styleName="links" />
              <SignUp styleName="button" />
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
          {auth ?
          <div className="links "  onClick={handleClickTicketHistory}>Ticket History</div>
        :
          <div className="links" onClick={handleClickStories}>
            Stories
          <Login styleName="links" />
          <SignUp styleName="links" />
          </div>}
        </div>
      )}
    </>
  );
}

export default NavBar;
