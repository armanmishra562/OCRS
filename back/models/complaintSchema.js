const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema({
  contact: {
    type: Number,
    required: [true, " Please Enter Phone Number "],
  },
  date: {
    type: String,
    required: [true, " Please Enter Date"],
  },
  description: {
    type: String,
    required: [true, " Please Enter Description"],
  },
  userId: {
    type: String,
  },
  status: {
    type: String,
    default: "Active",
  },
});

const Complaint = mongoose.model("COMPLAINT", complaintSchema);

module.exports = Complaint;
