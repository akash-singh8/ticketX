import React, { useState, useEffect } from "react";
import "./adminsection.css";
import Reqbox from "../reqbox/Reqbox";
import Pagenavigation from "../pagenavigation/Pagenavigation";
import Location from "../location/Location";
import { useModal } from "../../modalProvider/Modalprovider";

export default function Adminsection(props) {
  const { user } = useModal();
  const cat = props.cat;
  const ticketName = props.ticketName;
  const [sortby, setSortBy] = useState(false);
  const [byReqDates, setbyReqDates] = useState(true);
  const [byFrequency, setbyFrequency] = useState(true);
  const [sortedTickets, setSortedTickets] = useState([]);
  const initialStatus =
    user.role && user.role === "client" ? "pending" : "inreview";
  const [selectedStatus, setSelectedStatus] = useState(initialStatus);
  const [getTickets, setGetTickets] = useState([]);
  const authToken = localStorage.getItem("authorization");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const ticketsPerPage = 5;

  // Calculate the index range for the currently displayed tickets
  const indexOfLastTicket = currentPage * ticketsPerPage;
  const indexOfFirstTicket = indexOfLastTicket - ticketsPerPage;
  
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }
  
  const fetchTickets = async (status) => {
    try {
      const response = await fetch(
        `http://localhost:3080/ticket/all?ticketStatus=${status}`,
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
      ticket.title === ticketName.toUpperCase() &&
      (!selectedLocation || ticket.raisedBy.location === selectedLocation)
      );
  });
  
  const SortByReqdate = () => {
    const sortedByDateTickets = [...filteredTickets].sort((a, b) => {
      const dateA = new Date(a.dateRaised);
      const dateB = new Date(b.dateRaised);
      return dateA - dateB;
    });
    console.log(sortedByDateTickets,"dates")
    setSortedTickets(sortedByDateTickets)
  };
  
  const SortByFrequency = () => {
    const sortedByfrequencyTickets = [...filteredTickets].sort((a, b) => {
      const countA = a.raisedBy.ticketCount;
      const countB = b.raisedBy.ticketCount;
      return countA - countB;
    });
    console.log(sortedByfrequencyTickets,"freq")
    setSortedTickets(sortedByfrequencyTickets);
  };
  
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

  const handleLocationChange = (location) => {
    setSelectedLocation(location);
  };
  
  const handleRequestDatesClick = () => {
    setSortBy(!sortby);
    console.log(sortby)
    setbyReqDates(true);
    if (!byReqDates) {
      setbyFrequency(false); // Ensure only one sort option is selected
    } 
    SortByReqdate();
  };

  const handleFrequencyClick = () => {
    setSortBy(!sortby);
    setbyFrequency(!byFrequency);
    if (!byFrequency) {
      setbyReqDates(false); // Ensure only one sort option is selected
    }
    SortByFrequency();
  };
  
  const currentTickets = sortby ? sortedTickets.slice(indexOfFirstTicket, indexOfLastTicket) : filteredTickets.slice(indexOfFirstTicket, indexOfLastTicket);
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
        </div>
        <div className="filters">
          <label className="filter_label">
            <input type="checkbox" onClick={handleRequestDatesClick} />
            Filter By Request Dates
          </label>
          <label className="filter_label">
            <input type="checkbox" onClick={handleFrequencyClick} />
            Filter By Frequency
          </label>
        </div>
        <Location onLocationChange={handleLocationChange} />

        
          <div className="req-status admin_status center">
            <div className={`pending ${
              selectedStatus === "pending" ? "status" : ""
            }`} onClick={() => handlePending("pending")}>
              Pending
            </div>
            <div className={`inreview ${
            selectedStatus === "inreview" ? "status" : ""
          }`} onClick={() => handleInreview("inreview")}>
              In review
            </div>
            <div className={`resolved ${selectedStatus === "resolved" ? "status" : ""}`} onClick={() => handleResolved("resolved")}>
              Resolved
            </div>
          </div>
        
        {sortby
          ? sortedTickets.length > 0
            ? currentTickets.map((ticket,index) => (
                <Reqbox key={index} ticket={ticket} />
              ))
            : <h3 className="center">No {selectedStatus} Tickets</h3>
          : filteredTickets.length > 0
          ? currentTickets.map((ticket,index) => (
              <Reqbox key={index} ticket={ticket} />
            ))
          : <h3 className="center">No {selectedStatus} Tickets</h3>}
         <Pagenavigation
        ticketsPerPage={ticketsPerPage}
        totalTickets={sortby ? sortedTickets.length : filteredTickets.length}
        currentPage={currentPage}
        paginate={paginate}
      />
      </section>
    </>
  );
}
