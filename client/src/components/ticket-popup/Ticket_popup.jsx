import React, { useState } from "react";
import "./ticket_popup.css";
import Reqbox from "../reqbox/Reqbox";
import { useModal } from "../../modalProvider/Modalprovider";
import Pagenavigation from "../pagenavigation/Pagenavigation";

export default function TicketRequestssection() {
  const { user } = useModal();
  const [selectedStatus, setSelectedStatus] = useState("inreview");
  const [currentPage, setCurrentPage] = useState(1);
  const ticketsPerPage = 5;
  // Calculate the index range for the currently displayed tickets
  const indexOfLastTicket = currentPage * ticketsPerPage;
  const indexOfFirstTicket = indexOfLastTicket - ticketsPerPage;
  
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  // Filter tickets based on the selected status
  const determineUserRole=(email)=> {
    if (email.endsWith("@i-her.org")) {
      return "admin";
    } else {
      return "client";
    }
  };
  const role = determineUserRole(user.email); 
  console.log(user)
  let filteredTickets=[];
  if(role==="client"){
    filteredTickets = user.ticketRaised.filter(
      (ticket) => ticket.status === selectedStatus
    );
  }
  else if(role==="admin"){
    if(selectedStatus==="inreview"){
      filteredTickets = user.ticketInReview
    }
    else if(selectedStatus==="resolved")
      filteredTickets = user.ticketResolved
  }


  const handleStatusClick = (status) => {
    setSelectedStatus(status);
  };

  const currentTickets = filteredTickets.slice(indexOfFirstTicket, indexOfLastTicket);

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
          {role==="client"
          &&
          <div className="pending" onClick={() => handleStatusClick("pending")}>
            Pending
          </div>
          }
          <div className="inreview" onClick={() => handleStatusClick("inreview")}>
            Inreview
          </div>
          <div className="resolved" onClick={() => handleStatusClick("resolved")}>
            Resolved
          </div>
        </div>
      </div>
      {filteredTickets.length > 0 ? (
        currentTickets.map((ticket) => (
          <Reqbox key={ticket.id} ticket={ticket} /> // Added a key prop for React
        ))
      ) : (
        <h3 className="center">No {selectedStatus} Tickets</h3>
      )}

<Pagenavigation
        ticketsPerPage={ticketsPerPage}
        totalTickets={filteredTickets.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
}
