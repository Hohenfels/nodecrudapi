const express = require("express");
const authRoute = express.Router();

const userCtrl = require("../controllers/auth");

/* Create user account */
authRoute.post("/signup", userCtrl.signUp);

/* Sign in user account */
authRoute.post("/login", userCtrl.signIn);

module.exports = authRoute;
