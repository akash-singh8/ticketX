
import React from "react";
import "./ticket_popup.css";
import Reqbox from "../reqbox/Reqbox";

export default function TicketRequestssection() {
 


  return (
    <div className="admin_section">
      
       
          <div className="heading">
            <div>
              TICKET<br></br>
              <span>HISTORY</span>
            </div>
          </div>
          <div className="center">
          <div className="req-status admin_status">
            <div className="pending">Pending</div>
            <div className="inreview">Inreview</div>
            <div className="resolved">Resolved</div>
          </div>
        </div>
          <Reqbox/>
          <Reqbox/>
          <Reqbox/>
          <Reqbox/>
      
      
    </div>
  );
}
