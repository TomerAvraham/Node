const Car = require("./classes/Car");

const fruits = [
  "Cherry",
  "apple",
  "banana",
  "melon",
  "avocado",
  "Apricot",
  "Blackberries",
  "Cantaloupe",
];

function getSortedFruits() {
  const fruitsCopy = [...fruits].map((fruit) => fruit.toLowerCase());
  return fruitsCopy.sort();
}

const cars = [
  new Car("tesla", 2022, "S", 300),
  new Car("bmw", 2020, "m8", 280),
  new Car("buggati", 2019, "chiron", 310),
  new Car("honda", 2020, "type R", 260),
  new Car("toyota", 2018, "Skylay", 100),
  new Car("alpharomeo", 2015, "julia", 205),
];

module.exports = { fruits, cars, getSortedFruits };
