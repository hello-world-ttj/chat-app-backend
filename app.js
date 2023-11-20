require("dotenv").config();
const express = require("express");
const cors = require("cors");
const colors = require("colors");
const connectDB = require("./helpers/db/db");
const app = express();
connectDB();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 7700;

app.get("/", (req, res) => {
  res.send("Wow you are awesome!🔥");
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`.red.bold);
});
