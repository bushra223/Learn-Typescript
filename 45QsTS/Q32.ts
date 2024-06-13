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
