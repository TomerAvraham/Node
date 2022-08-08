const uuid = require("uuid");

class Weapon {
  constructor(name, ammo) {
    this.id = uuid.v4();
    this.name = name;
    this.ammo = ammo;
  }

  updateWeapon(name, ammo) {
    this.name = name;
    this.ammo = ammo;
  }
}

module.exports = Weapon;
