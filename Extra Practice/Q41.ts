console.log("Exercise 41");

// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
	let magician_names: string[] = ["Archimedes", "Alistair", "Azura"];
function showMagicians(magicians: string[]): void {
	magicians.forEach((element) => {
		console.log(element);
	});

}
showMagicians(magician_names);
export {magician_names,showMagicians};
