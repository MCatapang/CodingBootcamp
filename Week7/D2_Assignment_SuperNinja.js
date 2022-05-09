// NINJA CLASS
class Ninja {
    // -------------------------------- Constructor
    constructor(name, health, speed, strength) {
        this.ninjaName = name;
        this.ninjaHealth = health || 100;
        this.ninjaSpeed = speed || 3;
        this.ninjaStrength = strength || 3;
    }
    // -------------------------------- Class Methods
    sayName() {
        console.log(this.ninjaName);
    }
    showStats() {
        console.log(`${this.ninjaName} has ${this.ninjaHealth} health, ${this.ninjaSpeed} speed, and ${this.ninjaStrength} strength`);
    }
    drinkSake() {
        this.ninjaHealth += 10;
        console.log(`${this.ninjaName} now has ${this.ninjaHealth} health`);
        return this;
    }
}

// NINJA SUBCLASS: SENSEI
class Sensei extends Ninja {
    // -------------------------------- Constructor
    constructor(name, wisdom) {
        super(name);
        this.senseiWisdom = wisdom || 10;
    }
    // -------------------------------- Class Methods
    speakWisdom() {
        super.drinkSake();
        console.log("A very very wise message");
    }
}

// INSTANTIATION 
const masterPikachu = new Sensei("Master Pikachu");

// FUNCTION CALLS
console.log(masterPikachu);
masterPikachu.speakWisdom();