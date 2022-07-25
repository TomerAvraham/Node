const express = require("express");
const app = express();

// in order to node server get json
app.use(express.json());

// GET
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/bye", (req, res) => {
  res.send("<h1>Bye</h1>");
});

const fruits = ["apple", "banana", "melon"];

app.get("/fruits", (req, res) => {
  res.send(fruits);
});

const jokes = ["something funny1", "something funny2", "something funny3"];

app.get("/random/joke", (req, res) => {
  const randomJoke = jokes[Math.floor(Math.random() * 3)];
  res.json({ value: randomJoke });
});

app.get("/shoval", (req, res) => {
  res.send("shoval");
});

// POST
app.post("/", (req, res) => {
  res.send("This is post request");
});

app.post("/sayHey", (req, res) => {
  console.log(req.body.name);
  const greet = `Hey there ${req.body.name}`;
  res.send(greet);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
