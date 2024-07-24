import { Student } from "./student.js";
////////////////////////////////////
//////////////////////////////////
const tempStudent = new Student("Bilal", "Attique", 30, 93212020202, 1);
tempStudent.enroll("Typescript");
tempStudent.enroll("Javascript");
tempStudent.balance = 20000;
export const studentsArray = [];
studentsArray.push(tempStudent);
export let operations = [
    { name: "Add new student", value: "addStudent" },
    { name: "Enroll to a course", value: "enroll" },
    { name: "View balance", value: "viewBalance" },
    { name: "Pay tution fee", value: "pay" },
    { name: "View student status", value: "viewStatus" },
    { name: "Show all students", value: "show" },
    { name: "Exit", value: "exit" },
];
const tution_fee = {
    Typescript: 10000,
    JavaScript: 8000,
    "Artificial intelligence": 15000,
    "Machine Learning": 12000,
    "Data Science": 13000,
};
export const questions = [
    {
        type: "input",
        name: "first_name",
        message: "First name: ",
    },
    {
        type: "input",
        name: "last_name",
        message: "Last name:",
    },
    {
        type: "number",
        name: "age",
        message: "Age: ",
    },
    {
        type: "input",
        name: "phone",
        message: "Contact number:",
        validate(value) {
            if (String(value).length == 11 && !isNaN(Number(value)))
                return true;
            else {
                throw new Error("Please enter a valid phone number!");
            }
        },
    },
];
