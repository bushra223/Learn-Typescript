"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.favPeople1 = void 0;
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
var Q15_js_1 = require("./Q15.js");
Object.defineProperty(exports, "favPeople1", { enumerable: true, get: function () { return Q15_js_1.favPeople1; } });
console.log("Q16:Wow!More space is available so we can call some more guestes!");
// • Add one new guest to the beginning of your array.
Q15_js_1.favPeople1.unshift("Hafsa");
// • Add one new guest to the middle of your array.
var index_q16 = Math.floor(Q15_js_1.favPeople1.length / 2);
Q15_js_1.favPeople1.splice(index_q16, 0, "Safeera");
//• Use append() to add one new guest to the end of your list.
Q15_js_1.favPeople1.push("Asma");
//• Print a new set of invitation messages, one for each person in your list.
Q15_js_1.favPeople1.forEach(function (element) {
    console.log("Hi ".concat(element, "!  I'm hosting a dinner tonight and would love to have you join us. Venue:Huqa Pani 9 pm"));
});
