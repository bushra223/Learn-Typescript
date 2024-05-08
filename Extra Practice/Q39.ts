console.log("Exercise # 39");
// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(cityName: string, countryName: string): string {
	return `"${cityName}, ${cityName}"`;
}
console.log(city_country("Multan", "Pakistan"));
console.log(city_country("Abu Dhabi", "UAE"));
console.log(city_country("Jaddah", "Saudi Arabia"));
