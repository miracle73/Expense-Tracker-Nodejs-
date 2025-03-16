require("express-async-errors");
require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const errorHandler = require("./handlers/errorHandler");
const app = express();
app.use(express.json());

mongoose
  .connect(process.env.mongo_collection, {})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });
app.get("/", (req, res) => {
  res.send("Hello, from the serer");
});
app.use(errorHandler);
app.listen(5000, () => {
  console.log("Server connected successfully");
});
