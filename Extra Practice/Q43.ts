import { showMagicians, magician_names } from "./Q41";
import { make_great } from "./Q42";
console.log("Exercise 43");
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
let copy = [...magician_names];
//if we send copy as argument then make_great will modify it and return it , we have to keep it original so pass clone
let newArr = make_great([...copy]);
console.log("Original array");

showMagicians(copy);
console.log("Modified Array");
showMagicians(newArr);
