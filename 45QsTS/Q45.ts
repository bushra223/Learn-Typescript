console.log("Exercise 45");
// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
interface Car {
	Manufacturer: string;
	Model: string;
	//this allows arbitrary additional properties, key value pairs
	options: { key: string; value: any }[];
}
//differece between rest parameter and spread operator
// When ... is at the end of function parameters, it’s “rest parameters” and gathers the rest of the list of arguments into an array.
// When ... occurs in a function call or alike, it’s called a “spread syntax” and expands an array into a list.
function car_info(
	manufacturer: string,
	model: string,
	//rest parameter ,will gather the rest of list of args into an array
	//here { key: string; value: any }[] is array of key value pair objects,just pass as many objects and the func will convert it into array or args
	...args: { key: string; value: any }[]
): Car {
	let car: Car = { Manufacturer: manufacturer, Model: model, options: [] };
	for (let i = 0; i < args.length; ++i) car.options[i] = args[i];
	return car;
}
let myCar: Car = car_info(
	"Honda",
	"Civic 2022",
	{
		key: "colour",
		value: "blue",
	},
	{
		key: "availability",
		value: true,
	},
	{ key: "mileage", value: 3245 }
);
console.log(myCar);
