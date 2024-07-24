import inquirer from "inquirer";
import { studentsArray } from "./data.js";

export class Student {
  studentID: number;
  firstName: string;
  lastName: string;
  age: number;
  contactNumber: number;
  coursesEnrolled: string[];
  balance: number = 0;

  constructor(
    fname: string,
    lname: string,
    age: number,
    contact: number,
    id?: number
  ) {
    //for unique student we can use uuid package but it generates a long id 1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed
    if (id) this.studentID = id;
    // if id is not provided then generate a unique id
    else this.studentID = Math.floor(Math.random() * 1000) + 1;

    this.firstName = fname;
    this.lastName = lname;
    this.age = age;
    this.coursesEnrolled = [];
    this.contactNumber = contact;

    console.log(
      `New student with roll number ${this.studentID} has been added successfully`
    );
  }
  ///////////////functions on student///////////////
  enroll(course: string): number {
    if (this.coursesEnrolled.includes(course)) return -1;
    else {
      this.coursesEnrolled.push(course);
      return 0;
    }
  }
  viewBalance() {
    console.log(`Balance for student "${this.firstName}" is ${this.balance}.`);
  }

  payFee(fee: number) {
    if (fee <= this.balance) {
      this.balance -= fee;
      console.log(
        `Fee paid successfully! Remaining balance for student ${this.firstName} is ${this.balance}.`
      );
    } else
      console.log(
        `Fee can not be greater than the balance, i.e. ${this.balance}`
      );
  }

  showStatus(rollNumber: number) {
    console.log(`Status for student ${this.firstName} is:`);
    console.log(`Roll number: ${this.studentID}`);
    console.log(`Name: ${this.firstName + " " + this.lastName}`);
    console.log(`Age: ${this.age}`);
    console.log(`Contact Number: ${this.contactNumber}`);
    console.log(`Fee due: ${this.balance}`);
    console.log(`Courses enrolled: ${this.coursesEnrolled}`);
  }
}

/////////////////////////////////
// export async function enrollCourse() {
//   const answer = await inquirer.prompt([
//     {
//       name: "rollNo",
//       type: "number",
//       message: "Please enter roll number of student:",
//       validate(value) {
//         if (studentsArray.some((student) => student.studentID === value)) {
//           return true;
//         } else {
//           throw new Error("Invalid roll number!");
//         }
//       },
//     },
//   ]);
//   const studentFound: Student | undefined = studentsArray.find(
//     (student) => student.studentID === answer.rollNo
//   );
//   console.log("\n\n--------------------------------------------------------");
//   if (studentFound) {
//     if (studentFound.coursesEnrolled != "") {
//       console.log(
//         `This student has already enrolled in ${studentFound.coursesEnrolled} course.`
//       );
//     }
//     const arr_coursesAlreadyEnrolled = studentFound.coursesEnrolled?.split(",");

//     let flag = true;
//     while (flag) {
//       const courses = await inquirer.prompt([
//         {
//           name: "course",
//           type: "list",
//           message: "Choose courses:",
//           choices: [
//             "Typescript",
//             "Javascript",
//             "Artificial intelligence",
//             "Machine Learning",
//             "Data Science",
//           ],
//         },
//       ]);
//       if (arr_coursesAlreadyEnrolled) {
//         if (arr_coursesAlreadyEnrolled.includes(courses.course))
//           console.log("********Course already enrolled********");
//         else {
//           console.log(
//             "\n--------------------------------------------------------"
//           );
//           studentFound.coursesEnrolled =
//             studentFound.coursesEnrolled + "," + courses.course;
//           console.log(studentFound.coursesEnrolled);
//           flag = false;
//         }
//       } // else
//     } //while
//   } //if
// }
// //**************************** */
