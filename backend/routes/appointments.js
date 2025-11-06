const router = require("express").Router();
const Appointment = require("../models/Appointment");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

// Middleware to check login
function auth(req, res, next) {
  const token = req.headers.token;
  if (!token) return res.json({ error: "No token" });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch {
    res.json({ error: "Invalid token" });
  }
}

// Create appointment
router.post("/create", auth, async (req, res) => {
  const { date, reason } = req.body;

  const appt = await Appointment.create({
    userId: req.userId,
    date,
    reason
  });

  res.json({ message: "Appointment booked", appt });
});

// Get user appointments
router.get("/my", auth, async (req, res) => {
  const appts = await Appointment.find({ userId: req.userId });
  res.json(appts);
});

module.exports = router;
