import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';

import { Dog } from './dog.js'
import { Cat } from './cat.js'
import { Rabbit } from './rabbit.js'

let playerName;
let userPet;


const sleep = (ms = 2000) => new Promise((resolve) => setTimeout(resolve, ms));

try {
    const welcome = async () => {
        const rainbowTitle = chalkAnimation.rainbow('Welcome to digiPets! \n');
        await sleep();
        rainbowTitle.stop();
        console.log(`
        ${chalk.bgBlue(' HOW TO PLAY ')}
        Use the arrow keys to make a selection.
        Choose and name your pet.
        Keep it alive...it's not rocket science!
        `);
    };

    const askName = async () => {
        const answers = await inquirer.prompt({
            name: 'askName',
            type: 'input',
            message: `What is your ${chalk.magenta('name')}?`,
            default(){
                return 'Player';
            },
        });
    
        playerName = answers.askName;
    }
    
    const whichPet = async () => {
        const {typeOfPet} = await inquirer.prompt({
            name: 'typeOfPet',
            type: 'list',
            message: `Which ${chalk.magenta('species')} of digiPet would you like?`,
            choices: [
                {
                    key: "a",
                    name: `${chalk.red.bold('Dog')}`,
                    value: "dog",
                },
                {
                    key: "b",
                    name: `${chalk.blue.bold('Cat')}`,
                    value: "cat",
                },
                {
                    key: "c",
                    name: `${chalk.yellow.bold('Rabbit')}`,
                    value: "rabbit",
                }
            ],
        });
        
        const spinner = createSpinner('Checking stock...').start().stop();
        await sleep();
        
        const {petName} = await inquirer.prompt({
            name: 'petName',
            type: 'input',
            message: `Excellent, we have ${chalk.magenta('1')} left in stock! 
What are you going to call your ${chalk.magenta(`${typeOfPet}`)}?`
        });
        if (typeOfPet === 'dog'){
            userPet = new Dog(petName);
            spinner.success({ text: `Nice, ${chalk.magenta(`${playerName}`)}; meet ${chalk.magenta(`${petName}`)} your new digiPet - Dog Edition!`});
        } else if (typeOfPet === 'cat'){
            userPet = new Cat(petName);
            spinner.success({ text: `Nice, ${chalk.magenta(`${playerName}`)}; meet ${chalk.magenta(`${petName}`)} your new digiPet - Cat Edition!`}); 
        } else {
            userPet = new Rabbit(petName);
            spinner.success({ text: `Nice, ${chalk.magenta(`${playerName}`)}; meet ${chalk.magenta(`${petName}`)} your new digiPet - Rabbit Edition!`});
        }
        
        
    }; 
    
    const activies = async () => {
        const stats = userPet.getStats();
        userPet.growUp();

        const { choice } = await inquirer.prompt({
            name: 'choice',
            type: 'list',
            message: `What would you like to do with your ${chalk.magenta(`digiPet`)}?`,
            choices: [
                {
                    key: "a",
                    name: `${chalk.red.bold(`Feed`)}?`,
                    value: "eats",
                },
                {
                    key: "b",
                    name: `${chalk.blue.bold(`Play`)}?`,
                    value: "plays",
                },
                {
                    key: "c",
                    name: `${chalk.yellow.bold(`Put to bed`)}?`,
                    value: "sleeps",
                },
                {
                    key: "d",
                    name: `${chalk.green.bold(`Put in the shower`)}?`,
                    value: "bathes",
                },
                {
                    key: "e",
                    name: `${chalk.gray.bold(`Quit`)}?`,
                    value: "quits",
                },
            ],
        });    
    
        if ( choice === 'eats') userPet.eats();
        if ( choice === 'plays') userPet.plays();
        if ( choice === 'sleeps') userPet.sleeps();
        if ( choice === 'bathes') userPet.bathes();
        if ( choice === 'quits') quits();

        if (stats.health <= stats.minHealth) gameOver();
        if (stats.health > stats.maxHealth) {
            stats.health = stats.maxHealth;
        };
        if (stats.hunger >= stats.maxHunger) gameOver();
        if (stats.hunger <= stats.minHunger) {
            stats.health -= 10;
        };
        if (stats.cleanliness <= 50 && stats.cleanliness > 0) {
            stats.health -= 10;
            stats.happiness -= 10;
        };
        if (stats.cleanliness <= 0) {
            stats.health -= 20;
            stats.happiness -= 30;
        };
        if (stats.happiness < 0) gameOver();

        await sleep();
        activies();
    };
    
    const quits = async () => {
        console.log(`A quiter 'ay, ${chalk.magenta(`${playerName}`)}? Maybe ${chalk.magenta(`${userPet.name}`)} is better off without you.`);
        // await sleep();
        process.exit(1);
    }; 
    
    const gameOver = async () => {
        userPet.getStats();
        console.log(`Well, you neglected something along the way ${chalk.magenta(`${playerName}`)}...Maybe you should get a pet rock.`);
        // await sleep();
        process.exit(1);
    }; 

    
    await welcome();
    await askName();
    await whichPet();
    await activies();
    
} catch (error) {
    console.log('If you are seeing this, you\'ve taken a wrong turn somewhere.', error)
};





