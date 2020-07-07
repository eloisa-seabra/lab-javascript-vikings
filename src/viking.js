// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(thedamage) {
    this.health -= thedamage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(thedamage) {
    this.health -= thedamage;
    return this.health > 0
      ? `${this.name} has received ${thedamage}`
      : `${this.name} has died in act of combat`;
  }
  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(thedamage) {
    this.health -= thedamage;
    return this.health > 0
      ? `A Saxon has received ${thedamage} points of damage`
      : `A Saxon has died in combat`;
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    //we need to make a viking attack a saxon.
    //we have the vikings army in this.vikingsArmy armny and it is an array full of vikings.
    //we have the saxions army in this.saxonArmy

    //the battle randomply picks a viking to attack a saxon
    //[0,1,14,18,'santi'] --> 5
    //arr[3]
    //arr[1]
    //arr[4]
    //arr[5] --> undefined

    //randomly pick viking
    //Math.random() --> gives number between 0-1
    const randomPosition = Math.floor(Math.random() * this.vikingArmy.length);
    const randomViking = this.vikingArmy[randomPosition];

    //get a random saxon
    const saxonPosition = Math.floor(Math.random() * this.saxonArmy.length);
    const randomSaxon = this.saxonArmy[saxonPosition];

    const vikingAttackingPower = randomViking.attack();
    const attackedSaxon = randomSaxon.receiveDamage(vikingAttackingPower);

    if (randomSaxon.health > 0) {
      ///
    } else {
      //splice removes elements from the array starting from a position, then taking out x elements from there.
      this.saxonArmy.splice(saxonPosition, 1);
    }
    return attackedSaxon;
  }

  saxonAttack() {
    //randomly pick saxon
    const randomPosition = Math.floor(Math.random() * this.saxonArmy.length);
    const randomSaxon = this.saxonArmy[randomPosition];

    //get a random viking
    const vikingPosition = Math.floor(Math.random() * this.vikingArmy.length);
    const randomViking = this.vikingArmy[vikingPosition];

    const saxonAttackingPower = randomSaxon.attack();
    const attackedViking = randomViking.receiveDamage(saxonAttackingPower);

    if (randomViking.health > 0) {
      ///
    } else {
      //splice removes elements from the array starting from a position, then taking out x elements from there.
      this.vikingArmy.splice(vikingPosition, 1);
    }
    return attackedViking;
  }

  showStatus() {
    //const remainingSaxon = this.saxonArmy - attackedViking;
    if (this.saxonArmy.length === 0) {
      return `Vikings have won the war of the century!`;
    } else if (this.vikingArmy.length === 0) {
      return `Saxons have fought for their lives and survived another day...`;
    } else if (this.saxonArmy.length === this.vikingArmy.length) {
      return `Vikings and Saxons are still in the thick of battle.`;
    }
  }
}
