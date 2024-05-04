"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
// Develop a function that takes two inputs, a string and a character, and returns the number of times the character appears in the string.
function charCountInString(str, char) {
    var counter = 0;
    //str.match((/\b\w/g, (s) => s.toUpperCase());
    var matches = str.match(/a/g);
    console.log("The letter \"".concat(char, "\" appeared in string \"my name is bushra\" ").concat(matches === null || matches === void 0 ? void 0 : matches.length, " times"));
}
charCountInString("my name is bushra", "a");
var arrayOfObjects = [
    { task: "lunch", isCompleted: true },
    { task: "washedDishes", isCompleted: false },
    { task: "doneCoding", isCompleted: true },
    { task: "doneReading", isCompleted: false },
];
function taskStatus(arr) {
    console.log(arr.filter(function (obj) { return obj.isCompleted != true; }));
}
taskStatus(arrayOfObjects);
// Write a function that takes an array of integers and sorts them from smallest to largest.
function sort(arr) {
    for (var i = 0; i < arr.length; ++i) {
        var min = arr[i];
        if (arr[i + 1] < min) {
            arr[i] = arr[i + 1];
            arr[i + 1] = min;
        }
    }
    console.log(arr);
}
var unsortedArr = [3, 4, 5, 6, 4, 78, 4, 2, 1, 9];
sort(unsortedArr);
// Develop a TypeScript program that logs every element of an array in reverse order without using the .reverse() method.
function ReverseArray(arr) {
    var elementAtStart;
    for (var i = 1; i <= Math.floor(arr.length / 2); ++i) {
        elementAtStart = arr[i - 1];
        arr[i - 1] = arr[arr.length - i];
        arr[arr.length - i] = elementAtStart;
    }
    return arr;
}
console.log(ReverseArray(["bushra", 3, 6, "attique", true, 0]));
// Write a script that simulates a basic calculator. It should take two operands and an operator ('+', '-', '*', '/') from the user, perform the operation, and log the result.
var answer = await inquirer_1.default.prompt([
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
else
    console.log("Something went wrong!");
