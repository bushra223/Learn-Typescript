import inquirer from "inquirer";
import questions from "./questions.js";
const rep = "-";
let score = 0;
console.log("\t***** Welcome to the typescript quiz! *****");
const answers = await inquirer.prompt(questions);
for (let i = 1; i <= questions.length; i++) {
    if (answers["question" + i] == 1)
        score++;
}
// if (answers.question1 == 1) score++;
// if (answers.question2 == 1) score++;
// if (answers.question3 == 1) score++;
// if (answers.question4 == 1) score++;
// if (answers.question5 == 1) score++;
console.log(`Your final score is ${score} out of 5`);
