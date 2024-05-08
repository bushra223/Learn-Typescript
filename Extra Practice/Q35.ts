console.log("Exercise # 35");
// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
let animals: string[] = ["cat", "dog", "horse"];
//• Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
animals.forEach((element) => {
	console.log(`A ${element} would make a great pet`);
});

console.log(
	"All of above mentioned animals can be kept as pet, are farm animals, have four legs and are mammals. These animals would make a great pet"
);
