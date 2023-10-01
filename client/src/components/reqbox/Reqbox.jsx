import React from "react";
import "./reqbox.css";
import ViewReq from "../viewReq/ViewReq";
export default function Reqbox(props) {
  const ticket = props.ticket;
  return (
    <div className="req-box">
      <div className="container1-req">
        <div className="ticket-title">{ticket.title}</div>
        {ticket.message.split(" ").length > 30
          ? ticket.message.split(" ").slice(0, 30).join(" ") + "..."
          : ticket.message}
      </div>
      <ViewReq />
    </div>
  );
}
