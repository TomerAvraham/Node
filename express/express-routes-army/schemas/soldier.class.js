const uuid = require("uuid");

class Person {
  constructor(name, age, city, street) {
    this.id = uuid.v4();
    this.name = name;
    this.age = age;
    this.address = { city, street };
  }
}

class Soldier extends Person {
  constructor(name, age, city, street, rank, role) {
    super(name, age, city, street);
    this.rank = rank;
    this.role = role;
  }
}

module.exports = Soldier;
