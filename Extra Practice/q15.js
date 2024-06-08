"use strict";
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
Object.defineProperty(exports, "__esModule", { value: true });
exports.favPeople1 = void 0;
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
var Q14_js_1 = require("./Q14.js");
Object.defineProperty(exports, "favPeople1", { enumerable: true, get: function () { return Q14_js_1.favPeople1; } });
console.log("".concat(Q14_js_1.favPeople1[0], " can't attend the dinner because he is out of country"));
var index_q15 = Q14_js_1.favPeople1.indexOf("Attique");
Q14_js_1.favPeople1[index_q15] = "Nazia";
Q14_js_1.favPeople1.forEach(function (element) {
    console.log("Hi ".concat(element, "!  I'm hosting a dinner tonight and would love to have you join us. Venue:Huqa Pani 9 pm"));
});
