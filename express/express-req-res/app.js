const express = require("express");
const app = express();

const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Udi" },
  { id: 3, name: "Shahaf" },
  { id: 4, name: "Rotem" },
  { id: 5, name: "Yakov" },
  { id: 6, name: "Aline" },
];

// get by query
app.get("/getOne", (req, res) => {
  if (req.query.id === undefined) {
    return res.send("this request need to have id query");
  }
  const user = users.find((user) => user.id == req.query.id);
  if (user === undefined) {
    return res.send(`Sorry, We don't have user with ${req.query.id} id`);
  }
  res.send(user);
});

// get by params
app.get("/getOneParams/:id", (req, res) => {
  const user = users.find((user) => user.id == req.params.id);
  if (user === undefined) {
    return res.send(`Sorry, We don't have user with ${req.params.id} id`);
  }
  res.send(user);
});

const cars = [{ name: "toyota" }, { name: "tesla" }, { name: "audi" }];

app.get("/cars/getOne/:foo", (req, res) => {
  console.log(req.params.foo);
  const car = cars.find((car) => car.name === req.params.foo);
  res.send(car);
});

app.listen(5000, () => console.log("Running on 5000"));
