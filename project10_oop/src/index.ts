import inquirer from "inquirer";
import Person from "./person.js";
import Student from "./student.js";
const person = new Person();
const answer = await inquirer.prompt({
  name: "type",
  type: "number",
  message:
    "Press 1 if you like to talk to others or press 2 if you would rather keep to yourself.",
});
person.askQuestion(answer.type);
console.log(`You are ${person.getPersonality()}`);
const answer2 = await inquirer.prompt({
  name: "name",
  type: "input",
  message: "What is your  name?",
});

const student = new Student();
student.name = answer2.name;
console.log(
  `Your name is ${
    student.name
  } and your personality type is : ${student.getPersonality()}`
);
