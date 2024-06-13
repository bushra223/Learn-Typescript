//18
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
const favPlaces_q18 = ["Makkah", "Madina", "Baltistan", "Turkey", "Yemen"];
// • Print your array in its original order.
console.log(favPlaces_q18);
// • Print your array in alphabetical order without modifying the actual list.
let count_q18 = 1;
let asciiLower_q18 = 97, asciiUpper_q18 = 65;
//outer do
//the code will keep checking  the array for a-z as well as A-Z unless it has checked the array for all alphabets
//inner foreach will check all the elements if they match with e.g a or A and print them
//it will keep repeating unless it has done checking with all alphabets
do {
    favPlaces_q18.forEach((element) => {
        if (element.charAt(0) == String.fromCharCode(asciiLower_q18) ||
            element.charAt(0) == String.fromCharCode(asciiUpper_q18))
            console.log(element);
    });
    asciiLower_q18++;
    asciiUpper_q18++;
} while (asciiLower_q18 < 123 && asciiUpper_q18 < 90);
// • Show that your array is still in its original order by printing it.
console.log(favPlaces_q18);
// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Printing in reverse order:");
asciiLower_q18 = 122;
asciiUpper_q18 = 90;
do {
    favPlaces_q18.forEach((element) => {
        if (element.charAt(0) == String.fromCharCode(asciiLower_q18) ||
            element.charAt(0) == String.fromCharCode(asciiUpper_q18)) {
            console.log(element);
        }
    });
    asciiLower_q18--;
    asciiUpper_q18--;
} while (asciiLower_q18 > 96 && asciiUpper_q18 > 64);
// • Show that your array is still in its original order by printing it again.
console.log("Original Array:", favPlaces_q18);
// • Reverse the order of your list. Print the array to show that its order has changed.
favPlaces_q18.reverse();
console.log("Array in reverse order permanently:", favPlaces_q18);
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
favPlaces_q18.reverse();
console.log("Array in original order by reversing again:", favPlaces_q18);
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
favPlaces_q18.sort();
console.log("Sorted permanently changed array:", favPlaces_q18);
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
favPlaces_q18.sort((one, two) => (one < two ? 1 : -1));
//number with higher values come before
console.log("Array reversed using sort method:", favPlaces_q18);
export {};
