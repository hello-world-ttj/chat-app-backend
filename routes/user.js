const express = require("express");
const { registerUser, authUser } = require("../controllers/userController");
const userRoute = express.Router();

userRoute.route("/register").post(registerUser);
userRoute.post("/login", authUser);

module.exports = userRoute;
