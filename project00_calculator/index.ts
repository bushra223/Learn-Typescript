#! /usr/bin/env Node
//shabang
import inquirer from "inquirer";
let flag = false;
while (flag == false) {
	const answer = await inquirer.prompt([
		{ message: "Enter first number:", type: "number", name: "firstNumber" },
		{ message: "Enter second number:", type: "number", name: "secondNumber" },
		{
			message: "Select one of these operators to perform operation:",
			type: "list",
			name: "operator",
			choices: ["Addition", "Subtraction", "Division", "Multiplication"],
		},
	]);

	if (answer.operator === "Addition")
		console.log(answer.firstNumber + answer.secondNumber);
	else if (answer.operator === "Subtraction")
		console.log(answer.firstNumber - answer.secondNumber);
	else if (answer.operator === "Division")
		console.log(answer.firstNumber / answer.secondNumber);
	else if (answer.operator === "Multiplication")
		console.log(answer.firstNumber * answer.secondNumber);
	else console.log("Something went wrong!");
	let runAgain = await inquirer.prompt([
		{
			name: "continue",
			message: "Do you want to continue?",
			type: "confirm",
		},
	]);
	if (runAgain.continue == false) flag = true;
}
console.log("Thanks for using calculator!");
