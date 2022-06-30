import { Animal } from './animal.js'

class Dog extends Animal{
    constructor(name){
        super(name);
        this.name = name;
    };

    play() {
        this.happiness += 10;
        this.stamina -= 10;
        this.hunger += 10;
        this.cleanliness -= 5;
        this.health += 10;
        console.log(`${this.name} has had a great time playing fetch and feels content`);
        return this;
    };

    sleep() {
        this.stamina += 10;
        this.happiness += 10;
        this.hunger += 10;
        this.health += 10;
        this.happiness += 10;
        this.cleanliness -= 10;
        console.log(`${this.name} is sound asleep dreaming of chasing rabbits`);
        return this;
    };

}

export { Dog };
