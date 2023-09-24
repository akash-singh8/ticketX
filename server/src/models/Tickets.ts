import mongoose from "mongoose";

const UserRaised = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const TicketSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  dateRaised: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  raisedBy: {
    type: UserRaised,
    required: true,
  },
});

const Tickets = mongoose.model("Ticket", TicketSchema);

export default Tickets;
