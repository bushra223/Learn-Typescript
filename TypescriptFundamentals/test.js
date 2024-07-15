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
//this will create iffy code in js which is not optimal code a lot of lines...better option is to use const enum which will create only one line of code
//reverse mapping
var a = Seatchoice.MIDDLE;
console.log(a);
var b = Seatchoice[3];
console.log(b);
