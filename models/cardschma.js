const mongoose = require("mongoose");

const CardSchmea = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  author: {
    type: String,
  },
});

module.exports = CardSchmea;
