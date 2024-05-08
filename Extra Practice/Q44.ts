console.log("Exercise 44");
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
//we cn do so using rest parameter
//... is called spread operator
function prepare_sandwich(...sandwich_items: string[]): void {
	console.log(
		`You have ordered a sandwich with following items:\n${sandwich_items}`
	);
}
prepare_sandwich("Cheese slice", "grilled chicken", "salad", "chipotle sauce");
prepare_sandwich("shawarma chicken", "thom sauce", "french fries");
prepare_sandwich("Shami Kbab", "egg");
