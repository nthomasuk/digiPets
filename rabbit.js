import { Animal } from './animal.js';
import chalk from 'chalk';

class Rabbit extends Animal{
    constructor(name){
        super(name);
        this.name = name;
    };

    plays() {
        this.happiness += 10;
        this.stamina -= 10;
        this.hunger += 10;
        this.cleanliness -= 5;
        // this.health += 10;
        console.log(`${chalk.magenta(`${this.name}`)} doesn't need to play, he loves to organise!`);
        return this;
    };

    sleeps() {
        this.stamina += 10;
        this.happiness += 10;
        this.hunger += 10;
        this.health += 10;
        this.happiness += 10;
        this.cleanliness -= 10;
        console.log(`${chalk.magenta(`${this.name}`)} is sound asleep dreaming of Lola Bunny`);
        return this;
    };

}

export { Rabbit };
