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
            message: 'What is your name?',
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
            message: 'Which species of digiPet would you like?',
            choices: [
                {
                    key: "a",
                    name: "Dog",
                    value: "dog",
                },
                {
                    key: "b",
                    name: "Cat",
                    value: "cat",
                },
                {
                    key: "c",
                    name: "Rabbit",
                    value: "rabbit",
                }
            ],
        });
        
        const spinner = createSpinner('Checking stock...').start().stop();
        await sleep();
        
        const {petName} = await inquirer.prompt({
            name: 'petName',
            type: 'input',
            message: `Excellent, we have one left in stock! 
What are you going to call your ${typeOfPet}?`
        });
        if (typeOfPet === 'dog'){
            userPet = new Dog(petName);
            spinner.success({ text: `Nice, ${playerName}; meet ${petName} your new digiPet - Dog Edition!`});
        } else if (typeOfPet === 'cat'){
            userPet = new Cat(petName);
            spinner.success({ text: `Nice, ${playerName}; meet ${petName} your new digiPet - Cat Edition!`}); 
        } else {
            userPet = new Rabbit(petName);
            spinner.success({ text: `Nice, ${playerName}; meet ${petName} your new digiPet - Rabbit Edition!`});
        }
        
        
    }; 
    
    const activies = async () => {
        userPet.stats();

        const { choice } = await inquirer.prompt({
            name: 'activities',
            type: 'list',
            message: `What would you like to do with your digiPet?`,
            choices: [
                {
                    key: "a",
                    name: `Feed?`,
                    value: "eats",
                },
                {
                    key: "b",
                    name: `Play?`,
                    value: "plays",
                },
                {
                    key: "c",
                    name: `Put to bed?`,
                    value: "sleeps",
                },
                {
                    key: "d",
                    name: `Put in the shower?`,
                    value: "bathes",
                },
                {
                    key: "e",
                    name: `Quit?`,
                    value: "quits",
                },
            ],
        });    
    
        if ( choice === 'eats') userPet.eats();
        if ( choice === 'plays') userPet.plays();
        if ( choice === 'sleeps') userPet.sleeps();
        if ( choice === 'bathes') userPet.bathes();
        if ( choice === 'quits') {
            const quitChoice = quits();
            if (quitChoice){
                
            };
        }
        activies();
    };
        const quits = async () => {
            console.log(`Maybe they're is better off without you.`)
            process.exit(1);
        }; 
        
        const gameOver = async () => {
            console.log(`Maybe you should get a pet rock.`)
            process.exit(1);
        }; 

    
await welcome();
await askName();
await whichPet();
await activies();
    
} catch (error) {
    console.log('If you are seeing this, you\'ve taken a wrong turn somewhere.', error)
};





