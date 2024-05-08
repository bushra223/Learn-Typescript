// Install Node.js, TypeScript and VS Code on your computer.
// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
let person_name = "Bushra Attique";
console.log(`Hello ${person_name_q3}, would you like to learn some Python today?`);
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let titleCase = person_name_q3
    .toLowerCase()
    .replace(/\b\w/g, (s) => s.toUpperCase());
console.log("Lower Case: " +
    person_name_q3.toLowerCase() +
    "\nUpper Case:" +
    person_name_q3.toUpperCase() +
    "\nTitle Case:" +
    titleCase_q3);
// Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”
console.log('Holy Prphet (PBUH) said "No two things have been combined better than knowledge and patience."');
// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
let famousPerson = "Holy Prophet(PBUH)", message = `${famousPerson_q5} said "Seek knowledge from cradle to grave."`;
console.log(message_q5);
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
person_name_q3 = "\t\n\t\tBushra Attique\t\n";
console.log(`Name with white spaces = [${person_name_q3}] and without whitespaces= ${person_name_q3.trim()} `);
// Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.// You should create four lines that look like this:
// console.log(5 + 3)
// Your output should simply be four lines with the number 8 appearing once on each line.
console.log(6 + 2);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
// Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
let favNum = 7;
console.log(`My favourite number is ${favNum_q9}`);
// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
/*
// This is the code to write a person's name in uppercase, lower case and title case.
//In the line below i have used [replace(searchValue: string | RegExp, replaceValue: string): string] overload method of replace which takes in 2 parameters regexp and the string to be replaced.
  \b means border or first character of word
  \w means each word in the string
  g is a flag which means to use this regular expression for whole string and not just the first word or you can say do it globally
  (s) => s.toUpperCase() is an arrow function which takes matched string(first charcter) as parameter ,convert it into upper case and keeps the rest of the word unchanged
and because of g flag it does so with every word in the string.

let titleCase = person_name
    .toLowerCase()
    .replace(/\b\w/g, (s) => s.toUpperCase());

console.log(
    "Lower Case: " +
        person_name.toLowerCase() +
        "\nUpper Case:" +
        person_name.toUpperCase() +
        "\nTitle Case:" +
        titleCase
);
*/
// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
let firends = ["Zunash", "Mamoona", "Zahra"];
console.log(`${firends[0]}, ${firends[1]}, ${firends[2]}`);
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
console.log(`Hello ${firends[0]}! How are you doing?`);
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
const favTransport = "car";
const examples = ["Alto", "Civic", "Mehran", "Wagon-R"];
examples.forEach((example) => {
    console.log(`I would love to travel in ${example} ${favTransport}`);
});
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
const favPeople = ["Attique", "Mamoona", "Zunash"];
favPeople_q15.forEach((element) => {
    console.log(`Hi ${element}!  I'm hosting a dinner tonight and would love to have you join us. Venue:Huqa Pani 9 pm`);
});
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
console.log(`${favPeople_q15[0]} can't attend the dinner because he if out of country`);
let index = favPeople_q15.findIndex((person) => person === "Attique");
favPeople_q15[index_q15] = "Nazia";
favPeople_q15.forEach((element) => {
    console.log(`Hi ${element}!  I'm hosting a dinner tonight and would love to have you join us. Venue:Huqa Pani 9 pm`);
});
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
console.log("Wow!More space wis available so we can call some more guestes!");
// • Add one new guest to the beginning of your array.
favPeople_q15.unshift("Hafsa");
// • Add one new guest to the middle of your array.
index_q15 = Math.ceil(favPeople_q15.length / 2);
favPeople_q15[index_q15 - 1] = "Safeera";
//• Use append() to add one new guest to the end of your list.
favPeople_q15.push("Asma");
//• Print a new set of invitation messages, one for each person in your list.
favPeople_q15.forEach((element) => {
    console.log(`Hi ${element}!  I'm hosting a dinner tonight and would love to have you join us. Venue:Huqa Pani 9 pm`);
});
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
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
index_q15 = favPeople_q15.length;
for (let i = 0; i < index_q15; i++) {
    console.log(favPeople_q15.pop());
}
console.log(favPeople_q15);
//18
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
const favPlaces = ["Makkah", "Madina", "Baltistan", "Turkey", "Yemen"];
// • Print your array in its original order.
console.log(favPlaces_q18);
// • Print your array in alphabetical order without modifying the actual list.
console.log("Through copy method.", favPlaces_q18.concat().sort());
//second method
console.log("second method through ASCII:");
let count = 1;
let asciiLower = 97, asciiUpper = 65;
do {
    favPlaces_q18.forEach((element) => {
        if (element.charAt(0) == String.fromCharCode(asciiLower_q18) ||
            element.charAt(0) == String.fromCharCode(asciiUpper_q18)) {
            console.log(element);
        }
    });
    asciiLower_q18++;
    asciiUpper_q18++;
} while (asciiLower_q18 < 123 && asciiUpper_q18 < 90);
// • Show that your array is still in its original order by printing it.
console.log(favPlaces_q18);
// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Printing in reverse order:");
asciiLower_q18 = 122;
asciiUpper_q18 = 90;
do {
    favPlaces_q18.forEach((element) => {
        if (element.charAt(0) == String.fromCharCode(asciiLower_q18) ||
            element.charAt(0) == String.fromCharCode(asciiUpper_q18)) {
            console.log(element);
        }
    });
    asciiLower_q18--;
    asciiUpper_q18--;
} while (asciiLower_q18 > 96 && asciiUpper_q18 > 64);
// • Show that your array is still in its original order by printing it again.
console.log("Original Array:", favPlaces_q18);
// • Reverse the order of your list. Print the array to show that its order has changed.
favPlaces_q18.reverse();
console.log("Array in reverse order permanently:", favPlaces_q18);
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
favPlaces_q18.reverse();
console.log("Array in original order by reversing again:", favPlaces_q18);
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
favPlaces_q18.sort();
console.log("Sorted permanently changed array:", favPlaces_q18);
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
favPlaces_q18.sort((one, two) => (one < two ? 1 : -1));
//number with higher values come before
console.log("Array reversed using sort method:", favPlaces_q18);
//19
//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
favPeople_q15.push("Mamoona");
favPeople_q15.push("Hafsa");
console.log(`${favPeople_q15.length} are invited to dinner.`);
// 20
//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these
//items.
let tempList = [];
tempList_q20.push("Ravi");
tempList_q20.push("Beas");
tempList_q20.push("Chenab");
//21
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
let Rivers = {
    Lahore: "Ravi",
    JalandharDistrict: "Beas",
    Bahawalpur: "Chenab",
};
console.log("Customized object", Rivers.Bahawalpur, Rivers.JalandharDistrict, Rivers.Lahore);
// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program
let arr = [1, 2, 3];
console.log(arr_q22[4]); //error never raises, it just print undefined without throwing error
// //23
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
let num1 = 5, num2 = 6, str1 = "Pakistan", str2 = "pakistan", add = num1_q23 + num2_q23;
console.log("Is num1 =num2? I predict false");
console.log(num1_q23 == num2_q23);
console.log("Is str1=Paksitan? I predict fasle");
console.log(str1 == "pakistan");
console.log("Is str1=Paksitan? I predict true");
console.log(str1 == "Pakistan");
console.log("Is str2=Paksitan? I predict fasle");
console.log(str2_q23 == "Pakistan");
console.log("Is num1>5? I predict fasle");
console.log(num1_q23 > 5);
console.log("Is num1<num2? I predict true");
console.log(num1_q23 < num2_q23);
console.log("Is num2<num1? I predict false");
console.log(num2_q23 < num1_q23);
console.log("Is num1=5? I predict true");
console.log(num1_q23 == 5);
console.log("Is num2==6? I predict true");
console.log(num2_q23 == 6);
console.log("Is add>10? I predict true");
console.log(add_q23 > 10);
export {};
