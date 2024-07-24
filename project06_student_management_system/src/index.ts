//import inquirer from "inquirer";
import inquirer from "inquirer";

import { operations, questions, studentsArray } from "./data.js";

import { Student } from "./student.js";

async function main() {
  while (true) {
    const answer = await inquirer.prompt([
      {
        name: "task",
        type: "list",
        message: "Choose an operation:",
        choices: operations,
      },
    ]);

    //////////////////////////////
    if (answer.task == "addStudent") {
      console.log("Please enter student information:");
      const student = await inquirer.prompt(questions);
      let newStudent = new Student(
        student.first_name,
        student.last_name,
        student.age,
        student.phone
      );
      studentsArray.push(newStudent);
      const line = "-";
      console.log(line.repeat(60));
    }
    ////////////////////
    else if (answer.task === "viewBalance") {
      const id = await inquirer.prompt([
        {
          name: "rollNo",
          type: "number",
          message: "Please enter roll number of student:",
          validate(value) {
            if (studentsArray.some((student) => student.studentID === value))
              return true;
            else throw new Error("Invalid roll number!");
          },
        },
      ]);
      const studentFound: Student | undefined = studentsArray.find(
        (student) => student.studentID === id.rollNo
      );
      studentFound?.viewBalance();
      const line = "-";
      console.log(line.repeat(60));
    }
    ///////////////////////
    else if (answer.task === "pay") {
      const id = await inquirer.prompt([
        {
          name: "rollNo",
          type: "number",
          message: "Please enter roll number of student:",
          validate(value) {
            if (studentsArray.some((student) => student.studentID === value))
              return true;
            else throw new Error("Invalid roll number!");
          },
        },
        {
          name: "fee",
          type: "number",
          message: "Please enter the amount to pay:",
          validate(value) {
            if (value > 0) return true;
            else throw new Error("Invalid amount!");
          },
        },
      ]);
      const studentFound: Student | undefined = studentsArray.find(
        (student) => student.studentID === id.rollNo
      );
      console.log(`Fee due is : ${studentFound?.balance}`);

      studentFound?.payFee(id.fee);
      const line = "-";
      console.log(line.repeat(60));
    }
    ///////////////////////
    else if (answer.task === "viewStatus") {
      const id = await inquirer.prompt([
        {
          name: "rollNo",
          type: "number",
          message: "Please enter roll number of student:",
          validate(value) {
            if (studentsArray.some((student) => student.studentID === value))
              return true;
            else throw new Error("Invalid roll number!");
          },
        },
      ]);
      const studentFound: Student | undefined = studentsArray.find(
        (student) => student.studentID === id.rollNo
      );
      studentFound?.showStatus(id.rollNo);

      const line = "-";
      console.log(line.repeat(60));
    }
    ////////////////////////////////////////////////
    else if (answer.task === "show") {
      studentsArray.forEach((student) => {
        student.showStatus(student.studentID);
        const line = "-";
        console.log(line.repeat(60));
      });
    }
    /////////////////////////
    else if (answer.task == "enroll") {
      const id = await inquirer.prompt([
        {
          name: "rollNo",
          type: "number",
          message: "Please enter roll number of student:",
          validate(value) {
            if (studentsArray.some((student) => student.studentID === value)) {
              return true;
            } else {
              throw new Error("Invalid roll number!");
            }
          },
        },
        {
          name: "course",
          type: "list",
          message: "Choose courses:",
          choices: [
            "Typescript",
            "Javascript",
            "Artificial intelligence",
            "Machine Learning",
            "Data Science",
          ],
        },
      ]);
      const studentFound = studentsArray.find(
        (student) => student.studentID === id.rollNo
      );
      if (studentFound) {
        if (studentFound.coursesEnrolled.includes(id.course))
          console.log(
            `Student has already enrolled to following courses:\n${studentFound.coursesEnrolled}`
          );
        else if (!studentFound.coursesEnrolled.includes(id.course)) {
          studentFound?.enroll(id.course);
          console.log(`Course ${id.course} enrolled successfully!`);
          console.log(`Enrolled courses are ${studentFound.coursesEnrolled}`);
        }
      }
      const line = "-";
      console.log(line.repeat(60));
    }
    ////////////////////////

    /////////////////////////////////////////////////////////////
    else if (answer.task == "exit") process.exit();
  }
}
main();
