const express = require("express");
const app = express();
const { fruits, cars, getSortedFruits } = require("./data");
const Car = require("./classes/Car");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("cars and fruits API");
});

// Fruits
app.get("/fruits/all", (req, res) => {
  res.send(fruits);
});

app.get("/fruits/sort", (req, res) => {
  const sortedFruits = getSortedFruits();
  res.send(sortedFruits);
});

app.get("/fruits/sort/dec", (req, res) => {
  const sortedFruits = getSortedFruits().reverse();
  res.send(sortedFruits);
});

app.post("/fruits/create", (req, res) => {
  fruits.push(req.body.value);
  res.send(fruits);
});

// Cars
app.get("/cars/all", (req, res) => {
  res.send(cars);
});

app.get("/cars/sort", (req, res) => {
  // create copy of an array
  const carsCopy = [...cars];
  carsCopy.sort((a, b) => (a.name > b.name ? 1 : -1));
  res.send(carsCopy);
});

// 1. get data from body - Done
// 2. create new car with the data - Done
// 3. push new car to array - Done
// 4. send cars array as response - Done
app.post("/cars/create", (req, res) => {
  const { name, year, type, speed } = req.body;
  const newCar = new Car(name, year, type, speed);
  cars.push(newCar);
  res.send(cars);
});

app.listen(4000, () => {
  console.log(`Running on: 4000`);
});
