import inquirer from "inquirer";
import chalk from "chalk";
let answer = await inquirer.prompt([
    {
        name: "pin",
        type: "password",
        mask: "*",
        message: chalk.greenBright("Please enter your pin(1234):"),
    },
]);
if (answer.pin == "1234") {
    let flag = 0, currentBalance = +(Math.random() * 10000).toFixed(0);
    console.log(chalk.cyanBright.bold("Welcome to Bank ABC\nYour current balance is: " + currentBalance));
    while (flag == 0) {
        //fast cash
        //cash withsrawal
        //balance inqury
        //cancel transaction
        //deposit
        let operaions = await inquirer.prompt([
            {
                name: "operation",
                type: "list",
                message: chalk.bgBlueBright.bold("Please select one of these operations:"),
                choices: [
                    "Fast cash",
                    "Cash withdrawal",
                    "Balance inquiry",
                    "Deposit",
                    "Cancel transaction",
                ],
            },
        ]);
        if (operaions.operation == "Fast cash") {
            console.log(chalk.redBright(`Current Balance: ${currentBalance}`));
            let Amount = await inquirer.prompt([
                {
                    name: "amount",
                    type: "list",
                    message: chalk.yellowBright.bold("Choose the amount you want to withdraw:"),
                    choices: ["1000", "2000", "3000", "5000", "10000", "15000"],
                },
            ]);
            if (currentBalance >= parseInt(Amount.amount)) {
                currentBalance = currentBalance - parseInt(Amount.amount);
                console.log(`Your current balance is: ${currentBalance}`);
                flag = 1;
            }
            else {
                console.log(chalk.redBright("You don't have enough balance\nPlease try again"));
                flag = 0;
            }
        }
        else if (operaions.operation == "Cash withdrawal") {
            console.log(chalk.redBright(`Current Balance: ${currentBalance}`));
            let Amount = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: chalk.yellowBright.bold("Enter the amount you want to withdraw:"),
                },
            ]);
            if (Amount.amount && Number.isInteger(Amount.amount)) {
                if (currentBalance >= parseInt(Amount.amount)) {
                    currentBalance = currentBalance - parseInt(Amount.amount);
                    console.log(`Your current balance is: ${currentBalance}`);
                    flag = 1;
                }
                else {
                    console.log(chalk.redBright("You don't have enough balance\nPlease try again"));
                    flag = 0;
                }
            }
            else {
                console.log(chalk.redBright("Invalid amount\nPlease try again"));
                flag = 0;
            }
        }
        else if (operaions.operation == "Balance inquiry") {
            console.log(`Your current balance is: ${currentBalance}`);
            let TryAgain = await inquirer.prompt([
                {
                    name: "tryAgain",
                    type: "confirm",
                    message: "Do you want to perform another operation",
                },
            ]);
            if (TryAgain.tryAgain == true)
                flag = 0;
            else
                flag = 1;
        }
        else if (operaions.operation == "Deposit") {
            let Amount = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: chalk.yellowBright.bold("Please enter the amount you want to deposit:"),
                },
            ]);
            if (Amount.amount && Number.isInteger(Amount.amount)) {
                currentBalance = parseInt(Amount.amount) + currentBalance;
                console.log(`Your amount has been deposited\nYour current balance is: ${currentBalance}`);
                flag = 1;
            }
            else {
                console.log(chalk.redBright("Invalid amount\nPlease try again"));
                flag = 0;
            }
        }
        else if (operaions.operation == "Cancel transaction") {
            console.log(chalk.yellowBright("Transaction cancelled\nThank you for using Bank ABC!"));
            flag = 1;
        }
    }
}
else {
    console.log(chalk.redBright("Invalid pin\nPlease take your card and try again"));
}
