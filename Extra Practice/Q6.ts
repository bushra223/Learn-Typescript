// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
let person_name1 = "\t\n\t\tBushra Attique\t\n";
console.log(
	`\nName with white spaces = [${person_name1}] and without whitespaces= ${person_name1.trim()} `
);
