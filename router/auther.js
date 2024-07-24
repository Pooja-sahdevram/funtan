const express = require("express");
const router = express.Router();
const {
  usernamehandler,
  usernameq,
} = require("../controllers/usernamehandler");

//routes
router.get("/", usernamehandler);
router.get("/:name", usernamehandler);

module.exports = router;
