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
var Q41_1 = require("./Q41");
var Q42_1 = require("./Q42");
console.log("Exercise 43");
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
var copy = __spreadArray([], Q41_1.magician_names, true);
//if we send copy as argument then make_great will modify it and return it , we have to keep it original so pass clone
var newArr = (0, Q42_1.make_great)(__spreadArray([], copy, true));
console.log("Original array");
(0, Q41_1.showMagicians)(copy);
console.log("Modified Array");
(0, Q41_1.showMagicians)(newArr);
