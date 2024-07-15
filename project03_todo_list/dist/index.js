import inquirer from "inquirer";
import chalk from "chalk";
let toDoList = ["washing", "cooking", "sleeping", "coding"];
console.log(chalk.yellowBright("Tasks list\n" + toDoList));
let flag = 0;
while (flag == 0) {
    let answer = await inquirer.prompt([
        {
            name: "task",
            type: "list",
            message: "What do yout want to do?",
            choices: ["Add task", "Remove task", "Update task", "Quit"],
        },
    ]);
    if (answer.task == "Add task") {
        let newTask = await inquirer.prompt([
            {
                name: "task",
                type: "input",
                message: "Please enter new task to be added to your to_do_list:",
            },
        ]);
        if (toDoList.includes(newTask.task)) {
            console.log(chalk.redBright.bold("Task already exists!"));
        }
        else {
            toDoList.push(newTask.task);
            console.log(chalk.greenBright.bold("Task added successfully!"));
            console.log(chalk.yellowBright("Tasks list\n" + toDoList));
        }
    }
    else if (answer.task == "Remove task") {
        let removeTask = await inquirer.prompt([
            {
                name: "task",
                type: "list",
                message: "Please select the task to be removed from your to_do_list:",
                choices: toDoList,
            },
        ]);
        // no need for array.include check as it is already in the list
        toDoList.splice(toDoList.indexOf(removeTask.task), 1);
        console.log(chalk.greenBright.bold("Task removed successfully!"));
        console.log(chalk.yellowBright("Tasks list\n" + toDoList));
    }
    else if (answer.task == "Update task") {
        let updateTask = await inquirer.prompt([
            {
                name: "task",
                type: "list",
                message: "Please select the task to be updated from your to_do_list:",
                choices: toDoList,
            },
        ]);
        let updatedTask = await inquirer.prompt([
            {
                name: "task",
                type: "input",
                message: "Please enter the task to be updated in place of " +
                    updateTask.task +
                    ":",
            },
        ]);
        if (toDoList.includes(updatedTask.task)) {
            console.log(chalk.redBright.bold("Task already exists!"));
        }
        else {
            toDoList.splice(toDoList.indexOf(updateTask.task), 1, updatedTask.task);
            console.log(chalk.greenBright.bold("Task updated successfully!"));
            console.log(chalk.yellowBright("Tasks list\n" + toDoList));
        }
    }
    else if (answer.task == "Quit") {
        console.log(chalk.magentaBright("Thank you for using our app!"));
        flag = 1;
    }
}
