const express = require("express");
const stuffCtrl = require("../controllers/stuff");
const auth = require("../middleware/auth");
const multer = require("../middleware/multerConfig");

const stuffRoute = express.Router();

/* get all thing in DB */
stuffRoute.get("/", auth, stuffCtrl.getAllThing);

/* get one thing in DB */
stuffRoute.get("/:id", auth, stuffCtrl.getOneThing);

/* create one thing in DB */
stuffRoute.post("/", auth, multer, stuffCtrl.createThing);

/* update one thing in DB */
stuffRoute.put("/:id", auth, multer, stuffCtrl.updateThing);

/* delete one thing in DB */
stuffRoute.delete("/:id", auth, stuffCtrl.deleteThing);

module.exports = stuffRoute;
