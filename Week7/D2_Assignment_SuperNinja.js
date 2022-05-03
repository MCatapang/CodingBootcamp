class Ninja {
    constructor(name, health, speed, strength) {
        this.ninjaName = name;
        this.ninjaHealth = health;
        this.ninjaSpeed = speed || 3;
        this.ninjaStrength = strength || 3;
    }

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

class Sensei extends Ninja {
    constructor(name, wisdom) {
        super(name, 200, 10, 10);
        this.senseiWisdom = wisdom || 10;
    }

    speakWisdom() {
        super.drinkSake();
        console.log("A wise message");
    }
}

const masterPikachu = new Sensei("Master Pikachu");
console.log(masterPikachu);
masterPikachu.speakWisdom();