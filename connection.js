const mongoose = require("mongoose");
const CardSchmea = require("./models/cardschma");

mongoose.connect("mongodb://localhost:27017/Card").then(() => {
  console.log("mongodb connected");
});

const Card = mongoose.model("Card", CardSchmea);

module.exports = Card;
