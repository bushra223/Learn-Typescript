// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

const favTransport1: string = "car";
const examples1: string[] = ["Alto", "Civic", "Mehran", "Wagon-R"];
examples1.forEach((example: string) => {
	console.log(`I would love to travel in ${example} ${favTransport1}`);
});
