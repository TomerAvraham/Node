const express = require("express");
const router = express.Router();
const { weapons } = require("../data/data");
const Weapon = require("../schemas/weapon.class");

router.get("/all", (req, res) => {
  res.send(weapons);
});

router.post("/create", (req, res) => {
  const { name, ammo } = req.body;
  weapons.push(new Weapon(name, ammo));
  res.send("new weapon created");
});

router.put("/update", (req, res) => {
  const { id, name, ammo } = req.body;
  const index = weapons.findIndex((weapon) => weapon.id === id);
  if (index <= -1) {
    return res.send("ID doesn't exist ");
  }
  weapons[index].updateWeapon(name, ammo);

  res.send("Weapon Got Update");
});

router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  const index = weapons.findIndex((weapon) => weapon.id === id);
  if (index <= -1) {
    return res.send("ID doesn't exist");
  }
  let msg = `Weapon ${weapons[index].name} deleted`;
  weapons.splice(index, 1);
  res.send(msg);
});

module.exports = router;
