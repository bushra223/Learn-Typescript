"use strict";
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
Object.defineProperty(exports, "__esModule", { value: true });
var Q30_1 = require("./Q30");
function printGreetings() {
    if (Q30_1.users_q30.length == 0)
        console.log("We need to find some users!");
    else {
        Q30_1.users_q30.forEach(function (element) {
            if (element == "admin")
                console.log("Hi ".concat(element, "! would you like to see annual report?"));
            else
                console.log("Thank you for logging in again!");
        });
    }
}
console.log("Exercise # 31");
printGreetings();
var fixed_length = Q30_1.users_q30.length;
for (var i = 0; i < fixed_length; ++i) {
    Q30_1.users_q30.pop();
}
printGreetings();
