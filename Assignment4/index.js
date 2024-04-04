"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
console.log(" 1. Hello Variable");
//Instructions: Declare a variable named greeting with the string value "Hello, World!" and print it.
let greeting = "Hello, World!";
console.log(greeting);
console.log("2. Basic Math");
//
//Instructions: Define two variables with integer values and calculate their sum, difference, product, and quotient.
let num1, num2; // Assign integer values and perform arithmetic operations.
num1 = 5;
num2 = 7;
console.log(`Number 1= ${num1}, Number2 = ${num2}\nAddition=${num1 + num2}\nSubtraction=${num2 - num1}\nProduct=${num1 * num2}\nDivision=${num2 / num1}`);
console.log("3. Swapping Values");
//
//Instructions: Swap the values of two variables without using a third variable.
let a = 1, b = 2; // Swap these values without using a new variable.
console.log(`Before swapping\na=${a},b=${b}`);
b = a = b * 10 + a; //both have 21
b = b % 10;
a = Math.floor(a / 10);
console.log(`After swapping\na=${a},b=${b}`);
console.log("4. Type Annotation (TypeScript)");
//
///Instructions: This applies to TypeScript. Create a string variable and try changing its type.
let message; // Now try assigning a number to it and see what happens.
//message=123;//error
console.log("5. Modulus Operator");
//
//Instructions: Use the modulus operator to find the remainder of two numbers.
let number1 = 20, number2 = 3; // Use the modulus operator (%) to find the remainder.
console.log(`20%3= ${number1 % number2}`);
console.log("6. Increment Challenge");
//
//Instructions: Increment a variable's value by 1 using two different methods.
let counter = 0; // Increment this value by 1 in two different ways.
console.log(`counter++ : ${counter}\ncounter+=1:${(counter += 1)}`);
console.log("7. Logical Gates");
//
//Instructions: Given three boolean variables, write expressions for AND, OR, and NOT gates.
let A = true, B = false, C = true; // Write expressions using these.
console.log(`A = true, B=false, C=true\nA||B=${A || B}\nB&C=${B && C}\n(!A)=${!A}`);
console.log("8. Compound Assignment");
//
//Instructions: Show examples of using compound assignment operators.
let number3 = 10; // Use +=, -=, *=, and /= on this variable.
console.log(`Numer=3\nNumber+=2:${(number3 += 2)}
\nNumber-=2${(number3 -= 3)}
\nNumber*=2${(number3 *= 2)}
\nNumber/=2${(number3 /= 2)}`);
console.log("9. Even or Odd");
//Instructions: Write a program to check if a number is even or odd.
num1 = 10; // Determine if this is even or odd.
num2 = 13;
console.log("number1 = 10, number 2 = 13");
if (num1 % 2 == 0)
    console.log("number1 is even.");
else
    console.log("number1 is odd.");
if (num2 % 2 != 0)
    console.log("number2 is odd");
else
    console.log("number2 is odd.");
console.log("10. Voting Eligibility");
//Instructions: Check if a person is eligible to vote.
let age; // Check if age is 18 or older to determine voting eligibility.
age = 20;
console.log(`Age=${age}`);
if (age >= 18)
    console.log("Persson is eligible to cast vote.");
else
    console.log("Person is not eligible to cast vote");
console.log("11. Grading System");
//In order to use prompt for user input,
//please install prompt using this command npm install prompt-sync in your assignment folder
// npm i --save-dev @types/prompt-sync
//Instructions: Assign a grade based on a numerical score.
//const prompt = require("prompt-sync")();
let score = 0; // Use conditionals to assign and print grades A, B, C, D, or F.
//all inputs are in string, Number casts string to number
score = Number(prompt(`Please enter marks of student out of 100:`));
if (score <= 100 && score >= 80)
    console.log("Grade A");
else if (score < 80 && score >= 60)
    console.log("Grade B");
else if (score < 60 && score >= 50)
    console.log("Grade C");
else if (score < 50 && score >= 40)
    console.log("Grade D");
else
    console.log("Grade F");
console.log("12. Max of Three");
//Instructions: Find the maximum of three numbers.
let x, y, z, Max; // Determine the largest among these.
console.log("Please enter 3 numbers to find their Max:");
x = Number(prompt("Please enter first number:"));
y = Number(prompt("Please enter second number:"));
z = Number(prompt("Please enter third number:"));
if (x > y) {
    Max = x;
    if (x < z)
        Max = z;
}
else {
    Max = y;
    if (y < z)
        Max = z;
}
console.log(`Max is ${Max}`);
console.log("13. Leap Year Checker");
//Instructions: Check if a given year is a leap year.
let year; // Determine if this is a leap year.
//leap year is a year that comes after every 4 years
//but there are special cases of years which are in hundreds
//like 1700, 1800, 1900, 2100, 2200, 2300, 2500, 2600
//they are divisible by 4 but not leap year
//so second check is if the year is divisible by 100 it is a special case and in that special case
//we have to check if it is divisible by 400 only then it is a leap year otherwise not
// for example 1700 is divisible by 4 and 100 but not by 400 so it is not a leap year
//but 1600 is divisible by 4 , then 10, then 400 so it is a leap year
year = Number(prompt("Enter year:"));
if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0)
            console.log("The year is a leap year (it has 366 days).");
        else
            console.log("The year is not a leap year (it has 365 days).");
    }
    else
        console.log("The year is a leap year (it has 366 days).");
}
else
    console.log("The year is not a leap year (it has 365 days).");
console.log("14. Fahrenheit to Celsius Converter");
//Instructions: Write a program that converts temperature from Fahrenheit to Celsius.
let fahrenheit = Number(prompt("Enter temperature in Frahrenheit:")); // Convert this to Celsius and print the result.
console.log(`Temperature in degree celsius=${(5 / 9) * (fahrenheit - 32)}`);
console.log("15. Positive, Negative, or Zero");
//Instructions: Check if a number is positive, negative, or zero.
number1 = 0; // Determine the sign of this number.
if (number1 < 0)
    console.log(`${number1} is negative`);
else {
    if (number1 > 1)
        console.log(`${number1} is positive`);
    else
        console.log(`${number1} is zero`);
}
// Instructions: Write a program that prints the multiplication table of a given number up to 10.
console.log("16. Multiplication Table");
number1 = Number(prompt("Which times table do you want to see? choose from 1 to 10:"));
for (let i = 1; i <= 10; ++i) {
    console.log(`${number1} * ${i} = ${number1 * i}`);
}
//
// let number; // Print the multiplication table for this number up to 10.
