import { Animal } from './animal.js'

class Rabbit extends Animal{
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
        console.log(`${this.name} doesn't need to play, he loves to organise!`);
        return this;
    };

    sleep() {
        this.stamina += 10;
        this.happiness += 10;
        this.hunger += 10;
        this.health += 10;
        this.happiness += 10;
        this.cleanliness -= 10;
        console.log(`${this.name} is sound asleep dreaming of Bugs Bunny`);
        return this;
    };

}

export { Rabbit };
