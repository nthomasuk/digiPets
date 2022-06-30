import { Animal } from './animal.js'

class Cat extends Animal{
    constructor(name){
        super(name);
        this.name = name;
    };

    plays() {
        this.happiness += 10;
        this.stamina -= 10;
        this.hunger += 10;
        this.cleanliness -= 5;
        this.health += 10;
        console.log(`${this.name} has had lots of fun playing with a ball of yarn!`);
        return this;
    };

    sleeps() {
        this.stamina += 10;
        this.happiness += 10;
        this.hunger += 10;
        this.health += 10;
        this.happiness += 10;
        this.cleanliness -= 10;
        console.log(`${this.name} is sound asleep and dreaming of catnip`);
        return this;
    };

}

export { Cat };
