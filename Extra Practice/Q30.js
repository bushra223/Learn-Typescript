console.log("Exercise # 30");
// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
let users_q30 = ["admin", "guest", "restricted", "viewer"];
users_q30.forEach((element) => {
    console.log(`Hi ${element}! welcome to our app`);
});
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
users_q30.forEach((element) => {
    if (element == "admin")
        console.log(`Hi ${element}! would you like to see annual report?`);
    else
        console.log("Thank you for logging in again!");
});
export {};
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
