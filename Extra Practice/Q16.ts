// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
import { favPeople1 } from "./Q15.js";

console.log("Q16:Wow!More space is available so we can call some more guestes!");
// • Add one new guest to the beginning of your array.
favPeople1.unshift("Hafsa");


// • Add one new guest to the middle of your array.
let index_q16 = Math.floor(favPeople1.length / 2);


favPeople1.splice(index_q16, 0, "Safeera");

//• Use append() to add one new guest to the end of your list.
favPeople1.push("Asma");
//• Print a new set of invitation messages, one for each person in your list.
favPeople1.forEach((element) => {
	console.log(
		`Hi ${element}!  I'm hosting a dinner tonight and would love to have you join us. Venue:Huqa Pani 9 pm`
	);
});
export {favPeople1};