const Weapon = require("../schemas/weapon.class");
const Soldier = require("../schemas/soldier.class");

const weapons = [
  new Weapon("M-4", 5.56),
  new Weapon("M-16", 5.56),
  new Weapon("AK", 7.62),
  new Weapon("Glock-19", 9),
  new Weapon("UZI", 9),
];

const soldiers = [
  new Soldier("John", 18, "Tel-Aviv", "Alenbi", "private", "8200"),
  new Soldier("Jane", 20, "Haifa", "Alenbi", "Lieutenant", "troops"),
  new Soldier("Mike", 21, "Tel-Aviv", "Alenbi", "private", "troops"),
  new Soldier("James", 30, "Modi'in", "mivtza", "surgent", "Major"),
  new Soldier("Avi", 30, "Peth-tikva", "some street", "Colonel", "Major"),
];

module.exports = { weapons, soldiers };
