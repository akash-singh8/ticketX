import mongoose from "mongoose";

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

const Admins = mongoose.model("Admin", AdminSchema);

export default Admins;
