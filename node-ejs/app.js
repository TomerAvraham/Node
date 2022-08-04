const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

const person = {
  firstName: "Jane",
  lastName: "Doe",
  age: 55,
};

app.get("/", (req, res) => {
  res.render("pages/index", { person: person });
});

app.get("/posts", (req, res) => {
  res.render("pages/posts");
});

const PORT = 8000;
app.listen(PORT, () => console.log(`ROCK & ROLL ${PORT}`));
