#! /usr/bin/env node
//1. create random number
//2. take user guess as input
//3.compare user input with random num
import inquirer from "inquirer";
const random = Math.floor(Math.random() * 10 + 1);
//random gives value between 0 and 1
//by multiplying with 10 we are converting e.g 0.7 to 7
//+1 because we dont want zero...create 1 to 10
let answer = await inquirer.prompt([
    {
        name: "guessedNumber",
        type: "number",
        message: "Please guess the computer generated random number between 1 to 10:",
    },
]);
for (let i = 0; i < 10; ++i) {
    if (answer.guessedNumber == random) {
        console.log("You have guessed right!");
        i = 10;
    }
    else {
        if (answer.guessedNumber < random)
            console.log("You have guessed a number less than the random number,Try Again!");
        else
            console.log("You have guessed a number greater than the random number,Try Again!");
    }
    if (i != 10) {
        answer = await inquirer.prompt([
            {
                name: "guessedNumber",
                type: "number",
                message: "Please guess the computer generated random number between 1 to 10:",
            },
        ]);
    }
}
