//############TYPE KEYWORD#########In TypeScript, the type keyword is used to declare a new type alias or a type definition. It's a way to give a name to a type, making it easier to reference and reuse that type throughout your code. it is not a real object and erased at runtime you cant print it
var myID = 23;
var myobj = { name: "bushra", age: 2 };
console.log(myobj);
var myUnion = "active";
var myrec = { area: 2, width: 2, height: 3 };
var key3 = { name: "name", age: 2 };
console.log(key3); //wrong because it is not an object only type alias
var key1 = "name";
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
var Seatchoice;
(function (Seatchoice) {
    Seatchoice["AISLE"] = "aisle";
    Seatchoice[Seatchoice["MIDDLE"] = 3] = "MIDDLE";
    Seatchoice[Seatchoice["WINDOW"] = 4] = "WINDOW";
})(Seatchoice || (Seatchoice = {}));
var mySeat = Seatchoice.AISLE;
//this will create iffy code in js which is not optimal code a lot of lines...better option is to use const enum which will create only one line of code, dont use const enum because u cant import it as it is not a real object , it is not instantiated or referenced instead inlined by compiler at compile time and oesnt exist at run time
//reverse mapping
var a = Seatchoice.MIDDLE;
console.log(a);
var b = Seatchoice[3];
console.log(b);
console.log(4 /* Enum.B */);
var mySampleArray = [1, 2, 3, 2, 5, 2, 1, 1, 6, 7, 5, 3, 2, 1];
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
var orders = [
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
var sum = orders.reduce(function (prev, current, index) {
    console.log("previous:".concat(prev, ", current:").concat(current.total, ", index:").concat(index));
    return prev + current.total;
}, 0);
console.log(sum);
var arr = [1, 2, 3, 4];
console.log(arr.reduce(function (acc, current, index) {
    console.log(index);
    return acc + current;
}, 0) //if we give zero as the first number in acc then index will be 0,1,2,3 and if we dont give zero then index will be 1,2,3 in this case it will pick first element in accc and skip its index
);
// we can use reduce to flatten a 2d array
// we can find max with reduce
console.log(arr.reduce(function (prev, current) {
    if (current > prev)
        return current;
    else
        return prev;
}));
//we can calculate frequencies in list or data
var grades = new Array(2, 3, 4);
console.log(grades);
var grades2 = [1, 2, 3, 4];
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
var arr3 = [1, 2, 3, 4, 5];
var result = arr.slice(2); // [3, 4, 5]
//array declared with const has block scope
//array declared with let has function scope
var cars = ["Saab", "Volvo", "BMW"];
// Here cars[0] is "Saab"
{
    var cars_1 = ["Toyota", "Volvo", "BMW"];
    // Here cars[0] is "Toyota"
}
// Here cars[0] is "Saab"
var cars1 = ["Saab", "Volvo", "BMW"];
// Here cars[0] is "Saab"
{
    var cars1_1 = ["Toyota", "Volvo", "BMW"];
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
var sum1 = function (a, b) {
    return a + b;
};
var s = sum1(4, 5);
//function expression case 2 anonymous function...no need to call
//() ();
(function (a, b) {
    console.log(a + b);
})(3, 4);
////////arrow function type 3.....()=>{}
//1 concise syntax one line only
var sum2 = function (a, b) {
    return a + b;
};
console.log(sum2(7, 8));
//2 deals with objects
var objReturn = function () { return ({
    name: "smith",
}); };
console.log(objReturn().name);
//3 getting arguments
var arg = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.log(args);
};
arg(2, 3, "m");
///////function constructor ...type 3
function Person1(name, age) {
    this.name = name; //this here acts as local variable
    this.age = age;
    this.sayHello = function () {
        console.log("hello", this.name);
    };
}
var person2 = new Person1("bush", 39);
person2.sayHello();
