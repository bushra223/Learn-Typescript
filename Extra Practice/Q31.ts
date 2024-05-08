console.log("Exercise # 31");
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.

let users_q31: string[] = ["admin", "guest", "restricted", "viewer"];

function printGreetings() {
	if (users_q31.length == 0) console.log("We need to find some users!");
	else {
		users_q31.forEach((element) => {
			if (element == "admin")
				console.log(`Hi ${element}! would you like to see annual report?`);
			else console.log("Thank you for logging in again!");
		});
	}
}
printGreetings();
let fixed_length=users_q31.length;
for (let i = 0; i < fixed_length;++i) {
	users_q31.pop();
}
printGreetings();
