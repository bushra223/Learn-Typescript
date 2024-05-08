// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
const favPeople = ["Attique", "Mamoona", "Zunash"];
console.log("Oops! I can only invite 2 people now.");
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
favPeople_q15.forEach((element) => {
    if (favPeople_q15.length > 2)
        console.log(`I am sorry ${favPeople_q15.pop()}! I can’t invite you to dinner.`);
});
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
favPeople_q15.forEach((element) => {
    console.log(`Hi ${element}!  I'm hosting a dinner tonight and you are still invited. Venue:Huqa Pani 9 pm`);
});
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
let arr_length_fixed = favPeople_q15.length;
for (let i = 0; i < arr_length_fixed; ++i) {
    console.log(favPeople_q15.pop());
}
console.log(favPeople_q15);
export {};
