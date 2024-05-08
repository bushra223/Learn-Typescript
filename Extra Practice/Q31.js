console.log("Exercise # 31");
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
var users_q31 = ["admin", "guest", "restricted", "viewer"];
function printGreetings() {
    if (users_q31.length == 0)
        console.log("We need to find some users!");
    else {
        users_q31.forEach(function (element) {
            if (element == "admin")
                console.log("Hi ".concat(element, "! would you like to see annual report?"));
            else
                console.log("Thank you for logging in again!");
        });
    }
}
printGreetings();
var fixed_length = users_q31.length;
for (var i = 0; i < fixed_length; ++i) {
    users_q31.pop();
}
printGreetings();
