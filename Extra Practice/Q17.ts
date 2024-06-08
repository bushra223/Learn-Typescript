// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
import { favPeople1 } from "./Q16.js";

console.log("Q17: Oops! I can only invite 2 people now.");
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
let arr_length = favPeople1.length;

while(arr_length>2)
	{
		console.log(
			`I am sorry ${favPeople1.pop()}! I can’t invite you to dinner.`
		);
		arr_length--;
	}



// • Print a message to each of the two people still on your list, letting them know they’re still invited.
favPeople1.forEach((element) => {
	console.log(
		`Hi ${element}!  I'm hosting a dinner tonight and you are still invited. Venue:Huqa Pani 9 pm`
	);
});
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
favPeople1.splice(0, 2);

console.log(favPeople1);
