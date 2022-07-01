import chalk from 'chalk';

class Animal {
    constructor(name) {
        this.name = name;
        this.startingAge = 0;
        this.age = this.startingAge;
        this.health = 100;
        this.minHealth = 0;
        this.maxHealth = 100;
        this.hunger = 0;
        this.maxHunger = 100;
        this.minHunger = 0;
        this.stamina = 100;
        this.minStamina = 0;
        this.cleanliness = 100;
        this.minCleanliness = 0;
        this.happiness = 100;
        this.minHappiness = 0;
    };


    getStats() {
        console.table({
            name: this.name,
            age: this.age,
            health: this.health,
            hunger: this.hunger,
            stamina: this.stamina,
            cleanliness: this.cleanliness,
            happiness: this.happiness,
        });
        return this;
    };

    growUp() {
        this.age++;
        this.health -= -5;
        this.happiness -= 5;
        this.stamina -= 5;
        this.hunger += 5;
    }  

    eats() {
        if(this.health > this.minHealth && this.health < this.maxHealth) {
            this.health += 10;
            this.hunger -= 10;
            this.happiness += 5;
            console.log(`${chalk.magenta(`${this.name}`)} has eaten and has a big full belly!`);
            return this;
        } else if(this.health = this.maxHealth) {
            this.health -= 10;
            this.hunger -= 10;
            this.happiness -= 5;
            console.log(`${chalk.magenta(`${this.name}`)} is over-eating and not feeling too good`);
            // return this;
        }
    };

    bathes() {
        this.cleanliness += 10;
        this.happiness += 5;
        this.stamina += 5;
        this.hunger += 10;
        console.log(`${chalk.magenta(`${this.name}`)} is fresh as a daisy and feeling great!`)
        // return this;
    }
};

export { Animal };
    