import inquirer from "inquirer";
//possible use cases
//user enter single space, multiple spaces, single tab or multiple tabs
//our code should handle these cases
const answer = await inquirer.prompt([
    {
        type: "input",
        name: "text",
        message: "Please enter the text you want me to count the characters for:",
    },
]);
const textEntered = answer.text.trim();
//\s+ replaces single space or multiple spaces with single space,and g flag means thet reg ex will be tested against all possible occurrences
let temp1 = textEntered.replace(/\s+/g, " ");
//now we have the string which has removed all the whitespaces but just one single space between words
//now we cacn split
let words = temp1.split(" ");
console.log(`You have entered ${words.length} words and ${words.join("").toString().length} characters`);
