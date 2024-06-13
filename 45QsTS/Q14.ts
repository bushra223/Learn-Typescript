// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
const favPeople1 = ["Attique", "Mamoona", "Zunash"];
favPeople1.forEach((element) => {
	console.log(
		`Hi ${element}!  I'm hosting a dinner tonight and would love to have you join us. Venue:Huqa Pani 9 pm`
	);
});
export { favPeople1 };