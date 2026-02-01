const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth.routes");
const cvRoutes = require("./routes/cv.routes");
const vapiRoutes = require("./routes/vapi.routes");

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
  })
);

app.use("/api/vapi/webhook", express.raw({ type: "*/*" }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api/cv", cvRoutes);
app.use("/api/vapi", vapiRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "CareerAI Backend Running",
  });
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => {
    console.error("MongoDB Connection Failed:", error.message);
    process.exit(1);
  });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(
    `Frontend: ${process.env.FRONTEND_URL || "http://localhost:3000"}`
  );
  console.log("VAPI Webhook Ready");
});
