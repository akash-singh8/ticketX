import React, { useState } from "react";
import "./ticket_popup.css";
import Reqbox from "../reqbox/Reqbox";
import { useModal } from "../modalProvider/Modalprovider";

export default function TicketRequestssection() {
  const { user } = useModal();
  const [selectedStatus, setSelectedStatus] = useState("pending");

  // Filter tickets based on the selected status
  let filteredTickets=null;
  if(user.role==="client"){
    filteredTickets = user.ticketRaised.filter(
      (ticket) => ticket.status === selectedStatus
    );
  }
  else if(user.role==="admin"){
    filteredTickets = user.ticketResolved.filter(
      (ticket) => ticket.status === selectedStatus
    );
  }


  const handleStatusClick = (status) => {
    setSelectedStatus(status);
  };

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
          <div className="pending" onClick={() => handleStatusClick("pending")}>
            Pending
          </div>
          <div className="inreview" onClick={() => handleStatusClick("inreview")}>
            Inreview
          </div>
          <div className="resolved" onClick={() => handleStatusClick("resolved")}>
            Resolved
          </div>
        </div>
      </div>
      {filteredTickets.length > 0 ? (
        filteredTickets.map((ticket) => (
          <Reqbox key={ticket.id} ticket={ticket} /> // Added a key prop for React
        ))
      ) : (
        <h3 className="center">No {selectedStatus} Tickets</h3>
      )}

    </div>
  );
}
