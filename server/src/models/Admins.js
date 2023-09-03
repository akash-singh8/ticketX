const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  ticketResolved: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "tickets",
    },
  ],
});

const AdminModel = mongoose.model("Admin", AdminSchema);

module.exports = AdminModel;
