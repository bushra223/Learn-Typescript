import inquirer from "inquirer";
// Develop a function that takes two inputs, a string and a character, and returns the number of times the character appears in the string.
function charCountInString(str, char) {
	//str.match(char)?.length;
	let reg = new RegExp("\\" + char, "g");
	console.log(`The letter "${char}" appeared in string "my name is bushra what is your name in full?" :${
		str.match(reg)?.length
	}"
		)} times`);
}
charCountInString("my name is bushra what is your name in full?", "i");

//Create a 'to-do list' array of objects where each object has properties task and completed (a boolean). Write a function to log only the tasks that are not yet completed.

let arrayOfObjects = [
	{ task: "lunch", isCompleted: true },
	{ task: "washedDishes", isCompleted: false },
	{ task: "doneCoding", isCompleted: true },
	{ task: "doneReading", isCompleted: false },
];
function taskStatus(arr) {
	console.log(arr.filter((obj) => obj.isCompleted != true));
}
taskStatus(arrayOfObjects);
// Write a function that takes an array of integers and sorts them from smallest to largest.
function sort(arr) {
	for (let i = 0; i < arr.length; ++i) {
		let min = arr[i];
		if (arr[i + 1] < min) {
			arr[i] = arr[i + 1];
			arr[i + 1] = min;
		}
	}
	console.log(arr);
	//or
	//arr.sort((a, b) => a - b);
}
let unsortedArr = [3, 4, 5, 6, 4, 78, 4, 2, 1, 9];
sort(unsortedArr);
// Develop a TypeScript program that logs every element of an array in reverse order without using the .reverse() method.
function ReverseArray(arr) {
	let elementAtStart;
	for (let i = 1; i <= Math.floor(arr.length / 2); ++i) {
		elementAtStart = arr[i - 1];
		arr[i - 1] = arr[arr.length - i];
		arr[arr.length - i] = elementAtStart;
	}
	return arr;
}
console.log(ReverseArray(["bushra", 3, 6, "attique", true, 0]));
// Write a script that simulates a basic calculator. It should take two operands and an operator ('+', '-', '*', '/') from the user, perform the operation, and log the result.
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
