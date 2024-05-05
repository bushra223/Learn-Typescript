// Create a function calculateArea that takes the radius of a circle as an input and returns the area of the circle.
function calculateArea(radius: number): number {
	return 3.14 * Math.sqrt(radius);
}
console.log(`Area of circle with radius 4 is ${calculateArea(4)}`);

// Write a loop that logs numbers from 1 to 50. For multiples of 3, log "Fizz" instead of the number, and for multiples of 5, log "Buzz".
for (let i = 1; i <= 50; ++i) {
	if (i % 3 == 0) console.log("Fizz");
	else if (i % 5 == 0) console.log("Buzz");
	else console.log(i);
}
// Define an array temperatures with at least five different temperatures (numbers). Write a script to find and log the highest temperature.
let temperature: number[] = [20, 30, 35, 15, -1];
// let max: number = temperature[0];
// for (let i = 1; i < temperature.length; ++i) {
// 	if (max < temperature[i]) max = temperature[i];
// }

// console.log(`Max temp among ${temperature} is :${max}`);
//using built in function
temperature.sort();
console.log(
	`Max temp among ${temperature} is :${temperature[temperature.length - 1]}`
);

// Create a script that prompts the user to enter their age and then logs whether they are a minor (under 18) or an adult.
let age = 39;
if (age < 18) console.log("Minor");
else console.log("Adult");

// Write a function that takes an array of numbers and returns the count of positive numbers in the array.
function findPositives(arr: number[]): number {
	// let count: number = 0;
	// for (let i = 0; i < arr.length; ++i) {
	// 	if (arr[i] > 0) ++count;
	// }
	//using builtin function

	return arr.filter((element) => element > 0).length;
}
console.log(findPositives(temperature));
