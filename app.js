require("dotenv").config();
const express = require("express");
const cors = require("cors");
const colors = require("colors");
const connectDB = require("./helpers/db/db");
const userRoute = require("./routes/user");
const app = express();
connectDB();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 7700;
const { API_VERSION } = process.env;
const BASE_PATH = `/api/${API_VERSION}`;

app.use(`${BASE_PATH}/user`, userRoute);

app.get(`${BASE_PATH}`, (req, res) => {
  res.send("Wow you are awesome!🔥");
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`.red.bold);
});
