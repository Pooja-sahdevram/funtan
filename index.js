const express = require("express");
const app = express();
const path = require("path");
const author = require("./router/auther");
const Card = require("./connection");
// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use("/author", author);

// Routes
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/home", async (req, res) => {
  try {
    const cards = await Card.find({});
    res.send(cards);
  } catch (err) {
    res.status(500).send("Error fetching cards");
  }
});

app.post("/", async (req, res) => {
  try {
    if (req.body.title) {
      await Card.create({
        title: req.body.title,
        description: req.body.description,
        author: req.body.author,
      });
    }
    res.render("index");
  } catch (err) {
    res.status(500).send("Error creating card");
  }
});

app.delete("/", async (req, res) => {
  const cards = await Card.findByIdAndDelete(req.body._id);
  res.send("deleted");
});

//server
app.listen(6574, () => {
  console.log("server is started ");
});
