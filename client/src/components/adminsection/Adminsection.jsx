import React, { useState } from "react";
import "./adminsection.css";
import Reqbox from "../reqbox/Reqbox";
import Pagenavigation from "../pagenavigation/Pagenavigation";
export default function Adminsection(props) {
  const cat=props.cat;
  const [sortby, setsortby] = useState(false);
  return (
    <>
      <section className="admin_section">
        <div className="container">
          <div className="heading">
            <div>
              REQUESTS FOR<br></br>
              <span>{cat}</span>
            </div>
          </div>
          <div className="container">
            {sortby && <div className="sortby-dropdown">
                    <div className="dropdown-heading center">Sortby</div>
                    <div className="category">Requests date</div>
                    <div className="category">Frequent requests</div>
                </div>}
            <div className="dots3" onClick={() => setsortby(!sortby)}>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>
        </div>
        <div className="center">
          <div className="req-status admin_status">
            <div className="pending">Pending</div>
            <div className="inreview">Inreview</div>
            <div className="resolved">Resolved</div>
          </div>
        </div>
        <Reqbox />
        <Reqbox />
        <Reqbox />
        <Reqbox />
        <Pagenavigation />
      </section>
    </>
  );
}
