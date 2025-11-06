const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

// Signup
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  const existing = await User.findOne({ email });
  if (existing) return res.json({ error: "User already exists" });

  const hashed = await bcrypt.hash(password, 10);

  const user = await User.create({ name, email, password: hashed });

  res.json({ message: "Signup success", user });
});

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.json({ error: "User not found" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.json({ error: "Wrong password" });

  const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1d" });

  res.json({ message: "Login success", token });
});

module.exports = router;
