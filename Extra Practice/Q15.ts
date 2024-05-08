// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.
const favPeople_q15: string[] = ["Attique", "Mamoona", "Zunash"];
console.log(
	`${favPeople_q15[0]} can't attend the dinner because he is out of country`
);
let index_q15: number = favPeople_q15.indexOf("Attique");

favPeople_q15[index_q15] = "Nazia";
favPeople_q15.forEach((element) => {
	console.log(
		`Hi ${element}!  I'm hosting a dinner tonight and would love to have you join us. Venue:Huqa Pani 9 pm`
	);
});
