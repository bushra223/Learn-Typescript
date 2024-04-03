// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
let str1 = "Pakistan",
	str2 = "pakistan",
	num1 = 5,
	num2 = 6;
// • Tests for equality and inequality with strings
console.log("Is str1 =str2? I predict false");
console.log(str1 == str2);

console.log("Is str1 != str2? I predict true");
console.log(str1 != str2);

// • Tests using the lower case function
console.log(
	"Is str1 = str2 after converting both to same case? I predict true"
);
console.log(str1.toLowerCase() == str2.toLowerCase());

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

//already done in ex number 23

// • Tests using "and" and "or" operators
if (num1 + num2 > 10 && num1 + num2 < 20)
	console.log("sum of number 1 and number 2 lies between 10 and 20");

if (num1 + num2 > 10 || num1 + num2 < 20)
	console.log("sum of number 1 and number 2 is greater than 10");

// • Test whether an item is in a array
let languages = ["Urdu", "English", "Persian", "Punjabi", "Arabic"];
// • Test whether an item is not in a array
let languageFound = languages.find((lang) => lang == "English");
if (languageFound != undefined) console.log(`Item is in the array.`);
else console.log("Item is not in the array.");
//second method
if (languages.includes("English")) console.log("Item is in the array");

// Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
//version1
console.log("Exercise # 25");

let alien_color = "green";
if (alien_color == "green") console.log("Player has just earned 5 points!");

//version 2
alien_color = "red";
if (alien_color == "green") console.log("Player has just earned 5 points!");

console.log("Exercise # 26");
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
//version 1
alien_color = "green";
if (alien_color == "green")
	console.log("Player has just earned 5 points for shooting the alien!");
else console.log("The player has just earned 10 points!");
//version 2
alien_color = "yellow";
if (alien_color == "green")
	console.log("Player has just earned 5 points for shooting the alien!");
else console.log("The player has just earned 10 points!");

console.log("Ex # 27");
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

//version 1
alien_color = "green";
if (alien_color == "green")
	console.log("Player has just earned 5 points for shooting the alien!");
else if (alien_color == "yellow")
	console.log("The player has just earned 10 points!");
else if (alien_color == "red")
	console.log("The player has just earned 15 points!");

//version 2
alien_color = "yellow";
if (alien_color == "green")
	console.log("Player has just earned 5 points for shooting the alien!");
else if (alien_color == "yellow")
	console.log("The player has just earned 10 points!");
else if (alien_color == "red")
	console.log("The player has just earned 15 points!");

//version 3
alien_color = "red";
if (alien_color == "green")
	console.log("Player has just earned 5 points for shooting the alien!");
else if (alien_color == "yellow")
	console.log("The player has just earned 10 points!");
else if (alien_color == "red")
	console.log("The player has just earned 15 points!");

console.log("Exercise # 28");

// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
let age = 120;
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
if (age < 2) console.log("person is a baby");
else if (age >= 2 && age < 4) console.log("person is toddler");
else if (age >= 4 && age < 13) console.log("person is a kid");
else if (age >= 13 && age < 20) console.log("person is a teenager");
else if (age >= 20 && age < 65) console.log("person is an adult");
else console.log("person is an elder");

console.log("Exercise # 29");
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
let favFruits: string[] = ["mango", "banana", "cherry", "strawberry", "apple"];
console.log("my favourite fruits are " + favFruits);

if (favFruits.includes("apple")) console.log("your array has apples!");
if (favFruits.includes("pineapple")) console.log("your array has pineapples!");
else console.log("pineapples not found");

// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let fruitToBeFound = "mango";

if (favFruits.find((fruit) => fruit == fruitToBeFound))
	console.log(`you really like ${fruitToBeFound}!`);
else console.log(`${fruitToBeFound} not found`);

fruitToBeFound = "apple";
if (favFruits.find((fruit) => fruit == fruitToBeFound))
	console.log(`you really like ${fruitToBeFound}!`);
else console.log(`${fruitToBeFound} not found`);

fruitToBeFound = "pineapple";
if (favFruits.find((fruit) => fruit == fruitToBeFound))
	console.log(`you really like ${fruitToBeFound}!`);
else console.log(`${fruitToBeFound} not found`);

fruitToBeFound = "strawberry";
if (favFruits.find((fruit) => fruit == fruitToBeFound))
	console.log(`you really like ${fruitToBeFound}!`);
else console.log(`${fruitToBeFound} not found`);

fruitToBeFound = "banana";
if (favFruits.find((fruit) => fruit == fruitToBeFound))
	console.log(`you really like ${fruitToBeFound}!`);
else console.log(`${fruitToBeFound} not found`);

console.log("Exercise # 30");
// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
let users: string[] = ["admin", "guest", "restricted", "viewer"];
users.forEach((element) => {
	console.log(`Hi ${element}! welcome to our app`);
});
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
users.forEach((element) => {
	if (element == "admin")
		console.log(`Hi ${element}! would you like to see annual report?`);
	else console.log("Thank you for logging in again!");
});

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

console.log("Exercise # 31");
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
let size = users.length;
for (let i = 0; i < size; i++) {
	users.pop();
}
if (users.length == 0) console.log("We need to find some users!");

console.log("Exercise 32");
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
let current_users: string[] = ["BushrA", "BILAL", "anas", "attique"];

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
let new_users: string[] = [
	"mamoona",
	"hafsa",
	"bushra",
	"irfan",
	"bilal",
	"akhtar",
];

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
new_users.forEach((element) => {
	if (
		// current_users.includes(element.toLowerCase()) ||
		// current_users.includes(element.toUpperCase())
		current_users.some((item) => item.toLowerCase() == element.toLowerCase())
	)
		console.log(`username:${element} has already been used!`);
	else console.log(`username:${element} is available!`);
});

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

console.log("Exercise # 33");

// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
let arrayOfNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arrayOfNumbers.forEach((element) => {
	if (element == 1) console.log(`1st`);
	else if (element == 2) console.log(`2nd`);
	else if (element == 3) console.log(`3rd`);
	else console.log(`${element}th`);
});
// • Loop through the array.

// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.

console.log(`Exercise 34`);

// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
let pizzas: string[] = ["Fajita", "Texan BBQ", "Chicken Supreme"];
pizzas.forEach((element) => {
	console.log(element);
});

// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

pizzas.forEach((element) => {
	console.log(`I like ${element} pizza!`);
});
console.log(
	"I really like pizza. My favourite flavours in pizza are chicken supreme, and texan BBQ.I really love pizza. "
);

console.log("Exercise # 35");
// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
let animals: string[] = ["cat", "dog", "horse"];
//• Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
animals.forEach((element) => {
	console.log(`A ${element} would make a great pet`);
});
console.log(
	"All of above mentioned animals can be kept as pet, are farm animals, have four legs and are mammals. These animals would make a great pet"
);

console.log("Exercise # 36");
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

function make_shirt(size: string, msg: string): void {
	console.log(
		`Shirt size is ${size} and the text to be printed on shirt is "${msg}".`
	);
}

make_shirt("Medium", "Tommy");

console.log("Exercise # 37");
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.

//default parameter must come after required parameters
// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt3(msg?: string, size?: string): void {
	if (size && msg)
		console.log(
			`Size of shirt is ${size} and the text to be printed on shirt is "${msg}!"`
		);
	else if (size && !msg) {
		console.log(
			`Size of shirt is ${size} and the text to be printed on shirt is "I Love Typescript!"`
		);
	} else if (!size && !msg)
		console.log(
			`Size of shirt is large and the text to be printed on shirt is "I Love Typescript!"`
		);
}

make_shirt3();
make_shirt3(undefined, "medium");
make_shirt3("Polo", "small");

console.log("Exercise # 38");
// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
function describe_city(cityName: string, country_name?: string) {
	if (!country_name) console.log(`${cityName} is in Pakistan`);
	else console.log(`${cityName} is in ${country_name}`);
}
describe_city("Karachi");
describe_city("Lahore");
describe_city("Torronto", "Canada");

console.log("Exercise # 39");
// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(cityName: string, countryName: string): string {
	return `"${cityName}, ${cityName}"`;
}
console.log(city_country("Multan", "Pakistan"));
console.log(city_country("Abu Dhabi", "UAE"));
console.log(city_country("Jaddah", "Saudi Arabia"));

console.log("Exercise # 40");

// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly.
//Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
interface Album {
	artist: string;
	title: string;
	tracks?: number;
}
function make_album(
	artistName: string,
	albumTitle: string,
	numOfTracks?: number
): Album {
	let a: Album = { artist: "", title: "" };
	if (!numOfTracks) {
		a.artist = artistName;
		a.title = albumTitle;
	} else {
		a.artist = artistName;
		a.title = albumTitle;
		a.tracks = numOfTracks;
	}

	return a;
}

let album1, album2, album3, album4: Album;
album1 = make_album("Atif Aslam", "Naat");
console.log(album1);
album2 = make_album("Ali Zafar", "Channo");
console.log(album2);
album3 = make_album("Sajjad Ali", "Any");
console.log(album3);

album4 = make_album("Sajajd Ali", "Banno", 7);
console.log(album4);

console.log("Exercise 41");

// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let magician_names: string[] = ["Archimedes", "Alistair", "Azura"];
function showMagicians(magicians: string[]): void {
	magicians.forEach((element) => {
		console.log(element);
	});
}
showMagicians(magician_names);

console.log("Exercise 42");
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
let copy_of_magicians = Array.from(magician_names);
function make_great(magicians: string[]): void {
	for (let i = 0; i < magicians.length; ++i)
		magicians[i] = magicians[i] + " the Great!";
}
make_great(copy_of_magicians);
console.log("Original Array:");
showMagicians(magician_names);
console.log("Updated Array:");
showMagicians(copy_of_magicians);

console.log("Exercise 43");
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

console.log("This has been shown in exercise 42");
/// this has been done in exercise 43, if you pass original array as argument, the func will modify it , so we have t send a clone of the original array to function

console.log("Exercise 44");
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function prepare_sandwich(...sandwich_items: string[]): void {
	console.log(
		`You have ordered a sandwich with following items:\n${sandwich_items}\nPlease confirm your order.`
	);
}
prepare_sandwich("Cheese slice", "grilled chicken", "salad", "chipotle sauce");
prepare_sandwich("shawarma chicken", "thom sauce", "french fries");
prepare_sandwich("Shami Kbab", "egg");

console.log("Exercise 45");
// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
interface Car {
	Manufacturer: string;
	Model: string;
	//this allows arbitrary additional properties, key value pairs
	options: { [key: string]: any }[];
}
function car_info(
	manufacturer: string,
	model: string,
	...args: { [key: string]: any }[]
): Car {
	let car: Car = { Manufacturer: manufacturer, Model: model, options: [] };
	for (let i = 0; i < args.length; ++i) car.options[i] = args[i];
	return car;
}
let myCar: Car = car_info("Honda", "Civic", {
	colour: "blue",
	availability: true,
	mileage: 3245,
});
console.log(myCar);
