//############TYPE KEYWORD#########In TypeScript, the type keyword is used to declare a new type alias or a type definition. It's a way to give a name to a type, making it easier to reference and reuse that type throughout your code. it is not a real object and erased at runtime you cant print it

//type alias
type ID = number;
const myID: ID = 23;

//object types
type obj = {
  name: string;
  age: number;
};
let myobj: obj = { name: "bushra", age: 2 };
console.log(myobj);

// union types
type unionType = "active" | "inactive";

let myUnion: unionType = "active";

//intersection types
type Rectangle = {
  width: number;
  height: number;
} & {
  area: number;
};
let myrec: Rectangle = { area: 2, width: 2, height: 3 };
//if you try to join two types which cant be joined by rules, then never type is assigned to objects created from that type

////keyof///////returns a type which is union of all the keys or properties of an object
//you cant print the type object because it is erased at runtime. it is not a true object
interface person {
  name: string;
  age: number;
  gender?: string;
}

type keys = keyof person; // keys=name|age|gender
type key2 = person;
let key3: key2 = { name: "name", age: 2 };

console.log(key3); //wrong because it is not an object only type alias
let key1: keys = "name";
console.log(key1);

///////////////operators///////////////
//bitwise <<,>>,^,&,|
//logical operators  & , |, ^
//xor is logical as well bitwise and it is true only when one is true other is false

// //let arr:string[]|number[]=[1,'hello']; //error
// let arr1:(string|number)[]=[1,'hello'];//ok
// let arr2=[1,'hello'];//ok
// //let arr3:string|number[]=[1,'hello'];//error
// function checkParamName(name:string):void{
//     console.log(name);

// }
// checkParamName('Bushra');

///////////////////////ENUMS..allow developer to define a set of named constants that represent discrete values. they are true objects and exist at runtime, no need to create their objects directly use them...but in one case they become a type...when all the members of enum have literal values
//their value must be fixed at compile time(constant expressions like
// None,
/*Read = 1 << 1,
  Write = 1 << 2,
  ReadWrite = Read | Write,
  // computed member
  G = "123".length,*/

//  or computed)
//unless mentioned they start from 0 ...
//AISLE=GETINFO() NOT ALLOWED.........
//enum members cant have duplicate value
//there are string enums, const enums, heterogenous enums, last one not recommended
//When all members in an enum have literal enum values(string or constants), some special semantics come into play.enum members become types! e.g
/*enum ShapeKind {
  Circle,
  Square,
}
 
interface Circle {
  kind: ShapeKind.Circle;
  radius: number;
}
let c: Circle = {
  kind: ShapeKind.Square,
Type 'ShapeKind.Square' is not assignable to type 'ShapeKind.Circle'.
  radius: 100,
};
*/

enum Seatchoice {
  AISLE = "aisle",
  MIDDLE = 3,
  WINDOW,
}
const mySeat = Seatchoice.AISLE;
//this will create iffy code in js which is not optimal code a lot of lines...better option is to use const enum which will create only one line of code, dont use const enum because u cant import it as it is not a real object , it is not instantiated or referenced instead inlined by compiler at compile time and oesnt exist at run time
//reverse mapping
const a = Seatchoice.MIDDLE;
console.log(a);
const b = Seatchoice[3];
console.log(b);
//you cant treat enum as array like seatchoice[2] will print 3rd element...no
//if u give seatchoice[3] it will give mis=ddle
//if u give seatchoice['middle'] it will give 3, no indexing
// srting enums do not have reverse mappings
//enums are valUE as well as a type,at runtimeit acts as object
//typeof enum gives an object{RED:STRING,GREEN:STRING,BLUE:STRING}
//keyof typeof enum gives red|green|blue
//console.log(keyof typeof Seatchoice);
//const enums vs regular enums
//Const enums can only use constant enum expressions and unlike regular enums they are completely removed during compilation. Const enum members are inlined at use sites. This is possible since const enums cannot have computed members.
// enum vs object
//in modern typescript you dont need enum if you add ' as const' at the end of object

const enum Color1 {
  Red = 1,
  Green,
  Blue,
}
//var colorName: string = Color1[2]; //Not allowed with const enums,a const enum memeber can only be accessed using string literals
//console.log(colorName);

const enum Enum {
  A,
  B = Color1.Green * 2,
}
console.log(Enum.B);
let mySampleArray: number[] = [1, 2, 3, 2, 5, 2, 1, 1, 6, 7, 5, 3, 2, 1];
console.log(mySampleArray.lastIndexOf(2));
//learn array methods https://blog.canopas.com/typescript-array-methods-and-their-usages-daa8d498b4fd
//note about slice() a. It excludes the last index from an argument.if u give last index 4 then it will cut till 3
/*splice()
This method can be used for multiple purposes. For,
1. Add an element to an array
2. Replace specific elements within an array
3. Remove specific elements from an array

syntax:
array.splice(index, number of elements to be removed, element1,..,elementN)*/
// array.reduce....it is just a loop, a loop with memory
const orders = [
  { id: 1, total: 34 },
  { id: 2, total: 20 },
  { id: 3, total: 45 },
];
// let total = 0;
// for (const order of orders) {
//   total += order.total;
// }
//or use reducer function
// ()=>{}    signature of reducer function , remember the previous state returns the next state
//first argument of function is the acc which is just the previous state
//second argument is the current which is current value in the loop, currentorder
//within{} return the next state, return acc+curentorder.toal
//reduce(acc, current, index, orders), index and array are optional parameters
let sum = orders.reduce((prev, current, index) => {
  console.log(`previous:${prev}, current:${current.total}, index:${index}`);
  return prev + current.total;
}, 0);
console.log(sum);
let arr = [1, 2, 3, 4];
console.log(
  arr.reduce((acc, current, index) => {
    console.log(index);
    return acc + current;
  }, 0) //if we give zero as the first number in acc then index will be 0,1,2,3 and if we dont give zero then index will be 1,2,3 in this case it will pick first element in accc and skip its index
);
// we can use reduce to flatten a 2d array
// we can find max with reduce
console.log(
  arr.reduce((prev, current) => {
    if (current > prev) return current;
    else return prev;
  })
);
//we can calculate frequencies in list or data
let grades = new Array(2, 3, 4);
console.log(grades);
const grades2: number[] = [1, 2, 3, 4];
console.log(grades2);
//splice(index, remove_count, item_list to be inserted)
//slice(starting index incusive, ending index exclusive)
//start	Optional. Start position. Default is 0. Negative numbers select from the end of the array.
//end	Optional. End position. Default is last element. Negative numbers select from the end of the array.
//const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
//const myBest = fruits.slice(-3, -1);  lemon , apple
//mango is -1, apple is -2
//if only one parameter is given , it is considered as start
//if no parameter is given , it is considered as extracting full array
let arr3 = [1, 2, 3, 4, 5];
let result = arr.slice(2); // [3, 4, 5]
//array declared with const has block scope
//array declared with let has function scope
const cars = ["Saab", "Volvo", "BMW"];
// Here cars[0] is "Saab"
{
  const cars = ["Toyota", "Volvo", "BMW"];
  // Here cars[0] is "Toyota"
}
// Here cars[0] is "Saab"

let cars1 = ["Saab", "Volvo", "BMW"];
// Here cars[0] is "Saab"
{
  let cars1 = ["Toyota", "Volvo", "BMW"];
  // Here cars[0] is "Toyota"
}
// Here cars[0] is "Toyota"
//Variables declared with var, let and const are quite similar when declared inside a function.

//..They all have Function Scope:
// only the declaration is hoisted not initialization, so the value is undefined

/////////////////////////////functions
// the are hoisted can be called before declaration
//function declaration.....type 1, drawbak it is hoisted
person();
function person() {
  console.log("hello");
}

//function expression....type 2, it is not hoisted
let sum1 = function (a: number, b: number): number {
  return a + b;
};
let s = sum1(4, 5);
//function expression case 2 anonymous function...no need to call
//() ();
(function (a, b) {
  console.log(a + b);
})(3, 4);

////////arrow function type 3.....()=>{}
//1 concise syntax one line only
const sum2 = (a: number, b: number) => {
  return a + b;
};
console.log(sum2(7, 8));
//2 deals with objects
let objReturn = () => ({
  name: "smith",
});
console.log(objReturn().name);
//3 getting arguments
let arg = (...args) => {
  console.log(args);
};
arg(2, 3, "m");

///////function constructor  ...type 3
function Person1(name: string, age: number) {
  this.name = name; //this here acts as local variable
  this.age = age;
  this.sayHello = function () {
    console.log("hello", this.name);
  };
}

let person2 = new Person1("bush", 39);
person2.sayHello();
person2.gender = "male"; // adding new property...but drawback ...you are adding properties on different objects diffciulut to trace...solution is prototype

///////function prototype
Person1.prototype.gender = "male";
console.log(person2.gender); //male

//drawback of function constructor and prototype is they consume too much memory
//Anonymous function with explict type
let myAdd2: (x: number, y: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};

//type names dont matter
let myAdd3: (baseValue: number, increment: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};
//Lambda functions	// one line function
let myAdd4 = (a: number, b: number) => a + b;
//output will be: var myAdd4 = function(a : number, b : number) {return a + b};

type GreetFunction = (a: string) => void;
function greeter(fn: GreetFunction) {
  //....
}
function sayHello(name: string) {
  console.log(`Hello, ${name}!`);
}

greeter(sayHello); // this ensures type safety

/*Call Signatures
In JavaScript, functions can have properties in addition to being callable. However, the function type expression syntax doesn’t allow for declaring properties. If we want to describe something callable with properties, we can write a call signature in an ************object type:
*/
type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};
function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6));
}

function myFunc(someArg: number) {
  return someArg > 3;
}
myFunc.description = "default description";

doSomething(myFunc);

function firstElement<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}
// s is of type 'string'
const s1 = firstElement(["a", "b", "c"]);
// n is of type 'number'
const n = firstElement([1, 2, 3]);
// u is of type undefined
const u = firstElement([]);

/////////////////optional param
/*Use the parameter?: type syntax to make a parameter optional.
Use the expression typeof(parameter) !== 'undefined' to check if the parameter has been initialized.
if(param) will give undefined for zero and empty string so dont use it*/
//Note: Rest, optional and default parameters can only
// be at the end of the parameter list
//you should always have two or more signatures above the implementation of the function.
//Always prefer parameters with union types instead of overloads when possible
function len(x: any[] | string) {
  return x.length;
}
//In JavaScript, a function that doesn’t return any value will implicitly return the value undefined.
//function types are considered to be objects in TypeScript.
//The unknown type represents any value. This is similar to the any type, but is safer because it’s not legal to do anything with an unknown value:
//The type annotation for the object goes after the destructuring syntax:

function sum({ a, b, c }: { a: number; b: number; c: number }) {
  console.log(a + b + c);
}

//Tuple types have the advantage that you can accurately describe the type of an array of mixed types

var tuple: [number, string] = [1, "bob"];
var secondElement = tuple[1]; // secondElement now has type 'string'
// You can create a tuple using JavaScript's array syntax:

const failingResponse = ["Not Found", 404];
// but you will need to declare its type as a tuple.

const passingResponse: [string, number] = ["{}", 200];

// If you hover over the two variable names you can see the
// difference between an array ( (string | number)[] ) and
// the tuple ( [string, number] ).

// As an array, the order is not important so an item at
// any index could be either a string or a number. In the
// tuple the order and length are guaranteed.

if (passingResponse[1] === 200) {
  const localInfo = JSON.parse(passingResponse[0]);
  console.log(localInfo);
}

// This means TypeScript will provide the correct types at
// the right index, and even raise an error if you try to
// access an object at an un-declared index.

passingResponse[2];

// A tuple can feel like a good pattern for short bits of
// connected data or for fixtures.

type StaffAccount = [number, string, string, string?];

const staff: StaffAccount[] = [
  [0, "Adankwo", "adankwo.e@"],
  [1, "Kanokwan", "kanokwan.s@"],
  [2, "Aneurin", "aneurin.s@", "Supervisor"],
];

// When you have a set of known types at the beginning of a
// tuple and then an unknown length, you can use the spread
// operator to indicate that it can have any length and the
// extra indexes will be of a particular type:

type PayStubs = [StaffAccount, ...number[]];

const payStubs: PayStubs[] = [
  [staff[0], 250],
  [staff[1], 250, 260],
  [staff[0], 300, 300, 300],
];

const monthOnePayments = payStubs[0][1] + payStubs[1][1] + payStubs[2][1];
const monthTwoPayments = payStubs[1][2] + payStubs[2][2];
const monthThreePayments = payStubs[2][2];

// You can use tuples to describe functions which take
// an undefined number of parameters with types:

declare function calculatePayForEmployee(
  id: number,
  ...args: [...number[]]
): number;

calculatePayForEmployee(staff[0][0], payStubs[0][1]);
calculatePayForEmployee(staff[1][0], payStubs[1][1], payStubs[1][2]);

// tuple is a typed array with a pre-defined length and types for each index.///////////////////
// define our tuple
let ourTuple: [number, boolean, string];
// initialize correctly
ourTuple = [5, false, "Coding God was here"];
// We have no type safety in our tuple for indexes 3+
ourTuple.push("Something new and wrong");
console.log(ourTuple);
// define our readonly tuple....u cant push anything into readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [
  5,
  true,
  "The Real Coding God",
];
// throws error as it is readonly.
//ourReadonlyTuple.push('Coding God took a day off');
let mytuple: readonly [number, string] = [5, "a"];
//named tuples.....const graph: [x: number, y: number] = [55.2, 41.3];
//since tuples are arrays we can also destructure thhem, we can destructure any object and arrays are objects

const graph: [number, number] = [55.2, 41.3];
const [x, y] = graph;

//////Destructuring in TypeScript is a feature that allows you to extract values from arrays or properties from objects into distinct variables. It provides a more concise and readable syntax for unpacking values from data structures. Destructuring can be used for both arrays and objects.
const array = [1, 2, 3, 4];

const [first, second, third] = array;

console.log(first); // 1
console.log(second); // 2
console.log(third); // 3
const [first, second, ...rest] = array;

console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4]

//object destructuring
const person = {
  name: "Alice",
  age: 25,
  job: "Developer",
};

const { name, age, job } = person;

console.log(name); // Alice
console.log(age); // 25
console.log(job); // Developer
//equivalent code without destructuring
const name = person.name;
const age = person.age;
const job = person.job;

///////////////////structural typing/.......fresh and stale objects ****************
let fresh = {
  name: "bush",
  age: 25,
  job: "Developer",
};
/////////3 cases of stale objects ****************
//1 variable assign
//2 value modify
//3 func arguments pass

fresh.name = "bushNew"; ///modify case ...stale
let myvar = fresh; // var assign ...stale
function objF(obj: any) {}
objF(fresh); // func argument......stale

//structural typing...if u give a stale obj to variable this is called structural typing
type abc = { name: string };
let ab: abc = fresh; //abc type alias ensures structured typing, as it removes age and job from fresh and ensures structural typing

//TypeScript‘s type system is based on Structural typing. In a structurally typed system, a type is considered to be compatible with another type if the type has all the properties and methods of that type. But JavaScript is a duck-typed language. Since Typescript Compiles to JavaScript, you can take the benefit of duck typing also.

//this will throw error as typescript will not accept stale object
//create a new object literal and assign CSSFontFeatureValuesRule[Symbol]...fresh object

// synchronous code moves slowly singe threaded , do one task at a time, unless one task finished it cant start the second one

//asynchronous code executes numerous tasks at a time
//setTimeout() is an asynchronous function, meaning that the timer function will not pause execution of other functions in the functions stack. In other words, you cannot use setTimeout() to create a "pause" before the next function in the function stack fires.16-Jun-2024
