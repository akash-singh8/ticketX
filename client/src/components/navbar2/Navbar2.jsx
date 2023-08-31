import React from "react";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import "./navbar2.css";
export default function Navbar2() {
  const navigate = useNavigate();

  const handleClickServices = () => {
      navigate("/get-help");
    
  };

  const handleClickHome = () => {
    navigate("/");
  };
  return (
    <>
      <div className="Navbar2">
        <img className="logo " src={logo} alt="company-logo"></img>
        <div className="navigation web">
          <div>
            <div className="links web" onClick={handleClickHome}>
              Home
            </div>
          </div>
          <div className="links web" onClick={handleClickServices}>
            Services
            <div className="bar web"></div>
          </div>
          <div className="links web">Ticket History</div>
        </div>
        <div className="navigation">

        <div className="username">UserName</div>
        <div className="profile"></div>
        </div>
      </div>
    </>
  );
}
