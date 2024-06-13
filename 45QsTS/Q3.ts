// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let person_name_q3 = "bushra attique";
let titleCase_q3 = person_name_q3
	.toLowerCase()
	.replace(/\b\w/g, (s) => s.toUpperCase());

console.log(
	"\n\t\tLower Case:" +
		person_name_q3.toLowerCase() +
		"\n\t\tUpper Case:" +
		person_name_q3.toUpperCase() +
		"\n\t\tTitle Case:" +
		titleCase_q3
);
