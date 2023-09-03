const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
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
    type: UserSchema,
    required: true,
  },
});

const TicketModel = mongoose.model("Ticket", TicketSchema);

module.exports = TicketModel;
