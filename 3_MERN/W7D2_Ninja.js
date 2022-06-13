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

const michaelAngelo = new Ninja("Michael Angelo", 100, 50, 50);
michaelAngelo.sayName();
michaelAngelo.showStats();
michaelAngelo.drinkSake().drinkSake().drinkSake();