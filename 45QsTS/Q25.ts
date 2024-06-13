// Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
//version1
console.log("Exercise # 25");

let alien_color_q25 = "green";
if (alien_color_q25 == "green")
	console.log("Version 1\nPlayer has just earned 5 points!");

//version 2
alien_color_q25 = "red";
console.log("Version 2");

if (alien_color_q25 == "green") console.log("Player has just earned 5 points!");
