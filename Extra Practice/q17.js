// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
var favPeople_q17 = ["Attique", "Mamoona", "Zunash"];
console.log("Oops! I can only invite 2 people now.");
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
favPeople_q17.forEach(function (element) {
    if (favPeople_q17.length > 2)
        console.log("I am sorry ".concat(favPeople_q17.pop(), "! I can\u2019t invite you to dinner."));
});
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
favPeople_q17.forEach(function (element) {
    console.log("Hi ".concat(element, "!  I'm hosting a dinner tonight and you are still invited. Venue:Huqa Pani 9 pm"));
});
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
var arr_length_fixed = favPeople_q17.length;
for (var i = 0; i < arr_length_fixed; ++i) {
    console.log(favPeople_q17.pop());
}
console.log(favPeople_q17);