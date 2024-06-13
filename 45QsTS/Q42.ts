import { showMagicians, magician_names } from "./Q41";
console.log("Exercise 42");
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

let copy_of_magicians = [...magician_names];
function make_great(magicians: string[]): string[] {
	for (let i = 0; i < magicians.length; ++i)
		magicians[i] = magicians[i] + " the Great!";
	return magicians;
}
make_great(copy_of_magicians);
console.log("Original Array:");
showMagicians(magician_names);
console.log("Updated Array:");
showMagicians(copy_of_magicians);
export { make_great };
