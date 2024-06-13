"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showMagicians = exports.magician_names = void 0;
console.log("Exercise 41");
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
var magician_names = ["Archimedes", "Alistair", "Azura"];
exports.magician_names = magician_names;
function showMagicians(magicians) {
    magicians.forEach(function (element) {
        console.log(element);
    });
}
exports.showMagicians = showMagicians;
showMagicians(magician_names);
