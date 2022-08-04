require("dotenv").config();
const express = require("express");
const fs = require("fs");
const path = require("path");
const uuid = require("uuid");
const readJsonFile = require("./utils/readJsonFile");

const FILE_PATH = path.join(__dirname, "data", "dummy.json");

const app = express();

app.use(express.json());

app.get("/all", (req, res) => {
  const shoes = readJsonFile(FILE_PATH);
  res.status(200).send(shoes);
});

app.get("/single", (req, res) => {
  const { id } = req.query;
  if (id === undefined) return res.status(400).send("Missing id query");
  const shoes = readJsonFile(FILE_PATH);
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
  const shoes = readJsonFile(FILE_PATH);
  shoes.push(newShoe);

  fs.writeFileSync(FILE_PATH, JSON.stringify(shoes));
  res.sendStatus(201);
});

app.post("/buy/:id", (req, res) => {
  const { amount, money } = req.body;
  const { id } = req.params;
  const shoes = readJsonFile(FILE_PATH);
  const index = shoes.findIndex((shoe) => shoe.id === id);
  if (index < 0) return res.status(404).send("Id not found");
  const shoe = shoes[index];
  if (shoe.quantity === 0) {
    return res.status(400).send("Sorry, out of stock");
  } else if (shoe.quantity - amount < 0) {
    return res
      .status(400)
      .send(`Sorry, we only have ${shoe.quantity} in stock `);
  }
  const totalPrice = amount * shoe.price;
  if (totalPrice > money) {
    return res.status(400).send("Sorry, you broke");
  }
  shoes[index].quantity -= amount;
  fs.writeFileSync(FILE_PATH, JSON.stringify(shoes));

  res.status(200).send({
    message: "Thank you for your purchase",
    change: money - totalPrice,
  });
});

app.delete("/delete/:id", (req, res) => {
  const shoes = readJsonFile(FILE_PATH);
  const filterShoes = shoes.filter((shoe) => shoe.id !== req.params.id);
  fs.writeFileSync(FILE_PATH, JSON.stringify(filterShoes));
  res.sendStatus(200);
});

const PORT = process.env.PORT || 8070;
app.listen(PORT, () => console.log(`Running on ${PORT}`));
