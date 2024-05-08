// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
let str1 = "Pakistan",
	str2 = "pakistan",
	num1 = 5,
	num2 = 6;
console.log(`str1 = Pakistan, str2=pakistan, num1 =5, num2 =6`);

// • Tests for equality and inequality with strings
console.log("Is str1 =str2? I predict false");
console.log(str1 == str2_q23);

console.log("Is str1 != str2? I predict true");
console.log(str1 != str2_q23);

// • Tests using the lower case function
console.log(
	"Is str1 = str2 after converting both to same case? I predict true"
);
console.log(str1.toLowerCase() == str2_q23.toLowerCase());

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

//already done in ex number 23
console.log("Is str2=Paksitan?");
console.log(str2_q23 == "Pakistan");

console.log("Is 5>5?");
console.log(num1_q23 > 5);

console.log("Is 5<6?");
console.log(num1_q23 < num2_q23);

console.log("Is 5!=5?");
console.log(num1_q23 != 5);

console.log("Is 5<=5?");
console.log(num1_q23 <= 5);

console.log("Is 5>=5?");
console.log(num1_q23 >= 5);

// • Tests using "and" and "or" operators
console.log(
	"11 > 10 && 11<20=",
	num1_q23 + num2_q23 > 10 && num1_q23 + num2_q23 < 20
);

console.log(
	"11>10 || 11<20=",
	num1_q23 + num2_q23 > 10 || num1_q23 + num2_q23 < 20
);

// • Test whether an item is in a array
let languages = ["Urdu", "English", "Persian", "Punjabi", "Arabic"];
console.log("let array = ", languages);

if (languages.indexOf("English"))
	console.log("Language English is in the array");

// • Test whether an item is not in a array
if (languages.indexOf("French") == -1)
	console.log("Language French is not in the array");
