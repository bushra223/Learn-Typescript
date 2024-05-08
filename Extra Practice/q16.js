// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
const favPeople = ["Attique", "Mamoona", "Zunash"];
console.log("Wow!More space wis available so we can call some more guestes!");
// • Add one new guest to the beginning of your array.
favPeople_q15.unshift("Hafsa");
// • Add one new guest to the middle of your array.
let index = Math.ceil(favPeople_q15.length / 2);
favPeople_q15[index_q15 - 1] = "Safeera";
//• Use append() to add one new guest to the end of your list.
favPeople_q15.push("Asma");
//• Print a new set of invitation messages, one for each person in your list.
favPeople_q15.forEach((element) => {
    console.log(`Hi ${element}!  I'm hosting a dinner tonight and would love to have you join us. Venue:Huqa Pani 9 pm`);
});
export {};
