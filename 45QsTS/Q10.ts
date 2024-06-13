// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

/*
// This is the code to write a person's name in uppercase, lower case and title case.
//In the line below i have used [replace(searchValue: string | RegExp, replaceValue: string): string] overload method of replace which takes in 2 parameters regexp and the string to be replaced.
  \b means border or first character of word
  \w means each word in the string
  g is a flag which means to use this regular expression for whole string and not just the first word or you can say do it globally
  (s) => s.toUpperCase() is an arrow function which takes matched string(first charcter) as parameter ,convert it into upper case and keeps the rest of the word unchanged
and because of g flag it does so with every word in the string.

let titleCase = person_name
	.toLowerCase()
	.replace(/\b\w/g, (s) => s.toUpperCase());

console.log(
	"Lower Case: " +
		person_name.toLowerCase() +
		"\nUpper Case:" +
		person_name.toUpperCase() +
		"\nTitle Case:" +
		titleCase
);
*/
