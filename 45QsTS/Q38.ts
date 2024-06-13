console.log("Exercise # 38");
// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
function describe_city(cityName: string, country_name: string = "Pakistan") {
	if (!country_name) console.log(`${cityName} is in Pakistan`);
	else console.log(`${cityName} is in ${country_name}`);
}
describe_city("Karachi");
describe_city("Lahore");
describe_city("Torronto", "Canada");
