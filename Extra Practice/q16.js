// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
var favPeople_q16 = ["Attique", "Mamoona", "Zunash"];
console.log("Wow!More space wis available so we can call some more guestes!");
// • Add one new guest to the beginning of your array.
favPeople_q16.unshift("Hafsa");
// • Add one new guest to the middle of your array.
var index_q16 = Math.ceil(favPeople_q16.length / 2);
favPeople_q16[index_q16 - 1] = "Safeera";
//• Use append() to add one new guest to the end of your list.
favPeople_q16.push("Asma");
//• Print a new set of invitation messages, one for each person in your list.
favPeople_q16.forEach(function (element) {
    console.log("Hi ".concat(element, "!  I'm hosting a dinner tonight and would love to have you join us. Venue:Huqa Pani 9 pm"));
});
