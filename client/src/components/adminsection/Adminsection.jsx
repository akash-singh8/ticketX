import React, { useState, useEffect } from "react";
import "./adminsection.css";
import Reqbox from "../reqbox/Reqbox";
import Pagenavigation from "../pagenavigation/Pagenavigation";
import Location from "../location/Location";

export default function Adminsection(props) {
  const cat = props.cat;
  const ticketName = props.ticketName;
  const [sortby, setSortBy] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("pending");
  const [getTickets, setGetTickets] = useState([]);
  const authToken = localStorage.getItem("authorization");

  const fetchTickets = async (status) => {
    try {
      const response = await fetch(
        `http://localhost:3080/auth/getTickets?ticketStatus=${status}`,
        {
          method: "GET",
          headers: {
            Authorization: authToken,
          },
        }
      );

      const data = await response.json();
      if (response.ok) {
        setGetTickets(data.tickets);
      } else {
        const errorData = await response.json();
        throw new Error(`Failed to fetch tickets: ${errorData.message}`);
      }
    } catch (err) {
      console.error("Error fetching tickets:", err);
    }
  };

  const filteredTickets = getTickets.filter((ticket) => {
    return (
      ticket.status === selectedStatus &&
      ticket.category === cat.toUpperCase() &&
      ticket.title === ticketName.toUpperCase()
    );
  });

  // Fetch tickets on loading and on status change

  useEffect(() => {
    fetchTickets("pending");
  }, []);

  const handlePending = (status) => {
    setSelectedStatus(status);
    fetchTickets("pending");
  };
  const handleInreview = (status) => {
    setSelectedStatus(status);
    fetchTickets("inreview");
  };
  const handleResolved = (status) => {
    setSelectedStatus(status);
    fetchTickets("resolved");
  };

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
            {sortby && (
              <div className="sortby-dropdown">
                <div className="dropdown-heading center">Sort by</div>
                <div className="category">Requests date</div>
                <div className="category">Frequent requests</div>
              </div>
            )}
            <div className="dots3" onClick={() => setSortBy(!sortby)}>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>
        </div>
        <Location />
        <div className="center">
          <div className="req-status admin_status">
            <div
              className="pending"
              onClick={() => handlePending("pending")}
            >
              Pending
            </div>
            <div
              className="inreview"
              onClick={() => handleInreview("inreview")}
            >
              In review
            </div>
            <div
              className="resolved"
              onClick={() => handleResolved("resolved")}
            >
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
        <Pagenavigation />
      </section>
    </>
  );
}
