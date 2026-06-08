const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const path = require("path");
const postRoutes = require("./routes/postRoutes");
require("dotenv").config();

const app = express();
console.log("NEW BACKEND DEPLOYED");
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use(
    "/uploads",
    express.static(path.join(__dirname,"uploads"))
);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected Successfully");
  })
  .catch((err) => {
    console.log("MongoDB Error:", err);
  });

app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});