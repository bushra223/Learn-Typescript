console.log("Exercise # 29");
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
let favFruits_q29: string[] = [
	"mango",
	"banana",
	"cherry",
	"strawberry",
	"apple",
];
console.log("my favourite fruits are " + favFruits_q29);

if (favFruits_q29.indexOf("apple") >= 0) console.log("your array has apples!");
if (favFruits_q29.indexOf("pineapple") >= 0)
	console.log("your array has pineapples!");

// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let fruitToBeFound_q29 = "mango";
if (favFruits_q29.indexOf(fruitToBeFound_q29) >= 0)
	console.log(`you really like ${fruitToBeFound_q29}!`);
else console.log(`${fruitToBeFound_q29} not found`);

fruitToBeFound_q29 = "apple";
if (favFruits_q29.indexOf(fruitToBeFound_q29)>=0)
	console.log(`you really like ${fruitToBeFound_q29}!`);
else console.log(`${fruitToBeFound_q29} not found`);

fruitToBeFound_q29 = "pineapple";
if (favFruits_q29.indexOf(fruitToBeFound_q29)>=0)
	console.log(`you really like ${fruitToBeFound_q29}!`);
else console.log(`${fruitToBeFound_q29} not found`);

fruitToBeFound_q29 = "strawberry";
if (favFruits_q29.indexOf(fruitToBeFound_q29)>=0)
	console.log(`you really like ${fruitToBeFound_q29}!`);
else console.log(`${fruitToBeFound_q29} not found`);

fruitToBeFound_q29 = "banana";
if (favFruits_q29.indexOf(fruitToBeFound_q29)>=0)
	console.log(`you really like ${fruitToBeFound_q29}!`);
else console.log(`${fruitToBeFound_q29} not found`);
