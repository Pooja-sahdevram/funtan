const { model } = require("mongoose");

function usernamehandler(req, res) {
  res.send("hi " + req.query.name); // Added space after "hi"
}

const usernameq = (req, res) => {
  const name = req.query.name;
  res.send("hi " + name);
};

module.exports = { usernamehandler, usernameq }; // Corrected export syntax
