import inquirer from "inquirer";
const currencies = {
    USD: 1, // base currency
    EUR: 0.92,
    GBP: 0.77,
    CAD: 1.36,
    PKR: 279,
};
let selection = await inquirer.prompt([
    {
        name: "convertFrom",
        type: "list",
        message: "Please select the currency to convert from:",
        choices: ["USD", "EUR", "GBP", "CAD", "PKR"],
    },
    {
        name: "convertTo",
        type: "list",
        message: "Please select the currency to convert to:",
        choices: ["USD", "EUR", "GBP", "CAD", "PKR"],
    },
    {
        name: "amount",
        type: "input",
        message: "Please enter the amount to be converted:",
    },
]);
//if user select same currency
const selectedFromCurrency = currencies[selection.convertFrom];
if (selection.convertFrom == selection.convertTo) {
    console.log("Conversion is not possible for same currency.");
}
else if (selection.convertFrom == "USD") {
    console.log(`Amount from ${selection.convertFrom} to ${selection.convertTo}= ${(selection.amount * currencies[selection.convertTo]).toFixed(2)} `);
}
else {
    const conversionRate = selection.amount / currencies[selection.convertFrom];
    //console.log(conversionRate);
    console.log(`Amount from ${selection.convertFrom} to ${selection.convertTo}= ${(currencies[selection.convertTo] * conversionRate).toFixed(2)} `);
}
