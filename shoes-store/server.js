require("dotenv").config();
const express = require("express");
const fs = require("fs");
const path = require("path");
const uuid = require("uuid");

const FILE_PATH = path.join(__dirname, "data", "dummy.json");

const app = express();

app.use(express.json());

app.get("/all", (req, res) => {
  const data = fs.readFileSync(FILE_PATH);
  const shoes = JSON.parse(data);
  res.status(200).send(shoes);
});

app.get("/single", (req, res) => {
  const { id } = req.query;
  if (id === undefined) return res.status(400).send("Missing id query");
  const data = fs.readFileSync(FILE_PATH);
  const shoes = JSON.parse(data);
  const targetShoe = shoes.find((shoe) => shoe.id === id);
  if (targetShoe === undefined)
    return res.status(404).send("Sorry, we don't have shoe with that id");

  res.status(200).send(targetShoe);
});

app.post("/create", (req, res) => {
  const { brand, name, price, quantity } = req.body;
  if (!brand || !name || !price || !quantity)
    return res.status(400).send("Missing information");
  const newShoe = {
    id: uuid.v4(),
    brand,
    name,
    price,
    quantity,
  };
  const data = fs.readFileSync(FILE_PATH);
  const shoes = JSON.parse(data);
  shoes.push(newShoe);

  fs.writeFileSync(FILE_PATH, JSON.stringify(shoes));
  res.sendStatus(201);
});

const PORT = process.env.PORT || 8070;
app.listen(PORT, () => console.log(`Running on ${PORT}`));
