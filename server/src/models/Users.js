const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
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
  ticketRaised: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "tickets",
    },
  ],
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
