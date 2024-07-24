const questions = [
    {
        type: "list",
        name: "question1",
        message: 'What is the purpose of the "function" keyword in TypeScript?',
        choices: [
            { name: "To declare a variable", value: 0 },
            { name: "To define a function", value: 1 },
            { name: "To create a class", value: 0 },
            { name: "To import a module", value: 0 },
        ],
    },
    {
        type: "list",
        name: "question2",
        message: "What is the difference between a function declaration and a function expression in TypeScript?",
        choices: [
            {
                name: "Function declarations are hoisted, function expressions are not",
                value: 1,
            },
            {
                name: "Function declarations can only be used in classes, function expressions can be used anywhere",
                value: 0,
            },
            {
                name: "Function declarations are anonymous, function expressions are named",
                value: 0,
            },
            {
                name: "Function declarations are only used for arrow functions, function expressions are only used for regular functions",
                value: 0,
            },
        ],
    },
    {
        type: "list",
        name: "question3",
        message: 'What is the purpose of the "=>" syntax in TypeScript functions?',
        choices: [
            {
                name: "To separate function parameters from the function body",
                value: 0,
            },
            {
                name: "To indicate the return type of a function",
                value: 0,
            },
            { name: "To define an arrow function", value: 1 },
            { name: "To call a function", value: 0 },
        ],
    },
    {
        type: "list",
        name: "question4",
        message: "What is the difference between a regular function and an arrow function in TypeScript?",
        choices: [
            {
                name: 'Regular functions have their own "this" context, arrow functions do not',
                value: 1,
            },
            {
                name: "Regular functions can only be used in classes, arrow functions can be used anywhere",
                value: 0,
            },
            {
                name: "Regular functions are anonymous, arrow functions are named",
                value: 0,
            },
            {
                name: "Regular functions are only used for object methods, arrow functions are only used for callbacks",
                value: 0,
            },
        ],
    },
    {
        type: "list",
        name: "question5",
        message: 'What is the purpose of the "void" return type in TypeScript functions?',
        choices: [
            {
                name: "To indicate that a function returns no value",
                value: 1,
            },
            {
                name: "To indicate that a function returns a null value",
                value: 0,
            },
            {
                name: "To indicate that a function returns an undefined value",
                value: 0,
            },
            {
                name: "To indicate that a function returns a boolean value",
                value: 0,
            },
        ],
        // correctAnswer: 'NO_RETURN',
    },
];
export default questions;
