const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  userId: String,
  date: String,
  reason: String,
});

module.exports = mongoose.model("Appointment", appointmentSchema);
