const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const appointmentRoutes = require("./routes/appointments");
const { MONGO_URI } = require("./config");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.log(err));

app.use("/auth", authRoutes);
app.use("/appointments", appointmentRoutes);

app.get("/", (req, res) => {
  res.send("Backend running!");
});

app.listen(4000, () => console.log("✅ Server running on port 4000"));
