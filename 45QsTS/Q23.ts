// //23
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
let num1_q23 = 5,
	num2_q23 = 6,
	str1_q23 = "Pakistan",
	str2_q23 = "pakistan",
	add_q23 = num1_q23 + num2_q23;

console.log("Is num1 =num2? I predict false");
console.log(num1_q23 == num2_q23);

console.log("Is str1=Paksitan? I predict fasle");
console.log(str1_q23 == "pakistan");

console.log("Is str1=Paksitan? I predict true");
console.log(str1_q23 == "Pakistan");

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
