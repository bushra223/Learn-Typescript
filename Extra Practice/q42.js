"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.make_great = void 0;
var Q41_1 = require("./Q41");
console.log("Exercise 42");
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
var copy_of_magicians = __spreadArray([], Q41_1.magician_names, true);
function make_great(magicians) {
    for (var i = 0; i < magicians.length; ++i)
        magicians[i] = magicians[i] + " the Great!";
    return magicians;
}
exports.make_great = make_great;
make_great(copy_of_magicians);
console.log("Original Array:");
(0, Q41_1.showMagicians)(Q41_1.magician_names);
console.log("Updated Array:");
(0, Q41_1.showMagicians)(copy_of_magicians);
