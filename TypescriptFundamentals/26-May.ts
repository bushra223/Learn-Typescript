let str = "my name is bushra";
console.log(str.split(""));

//structural typing
//1. obj literals............new objects
//2. stale objects......if obj structure is same i.e lhs has all keys in rhs then we can assign

//3. obj literal with signature index

//duck typing or structural typing
type ball = {
	dm: number;
};
type tube = {
	dm: number;
	length: number;
};
let b1: ball = { dm: 10 }; //object literal
let t1: tube = { dm: 20, length: 5 };
b1 = t1; //stale object
//error because right side can have extra keys but left sid ecant
//t1=b1;

// index signature.............we use it ehen keys and values are unkown
//[a:string]:any
let x: { id: number; [a: string]: any };
x = { id: 20, name: "bushra" };
x = { id: 20, name: "bushra", lastName: "akhtar" };

let a: { foo: number };
//a = { foo: 5, baz: 2 }; //fresh object error

let b: { foo: number; baz?: number };
b = { foo: 6, baz: 6 };
a = b;

//js code can crash on rutime but ts code can never
//any, unknown,  never are special data types  not primitive

//any
//in case of any u r responsible for crash or issues in the applications so dont use any
//despite using any use javascript
//you use any when you dont want typeschecking

//unknown    ............unknown va ko ap kisi b or type me assign nhi kr skte
//a little secure as compared to any
let value: unknown;
let value3: any;
value3 = false;
value = true;
value = 2;
value = "2";
value = true;
let value2: boolean;

//value2=value;// throw error because type not known, so unknown is somehow secure
//unknown cant accept any value other than any;

///////////////////////difference between unknown and any

// we can assign any value to unknown and any.
//but you can not assign unknown to any other data type but any does

//e.g const myvar:boolean=value///error
// const mayvar:boolean=value3//ok
//the only way to assign value of unknown type var to some other variable you can type cast

value = value3; // any can be assigned

///////////////////never
//you use it when no typechecking, neither any nor unknown, it expects that code will never use never and will throw exception if encountered
//never cann ot be assigned into unknown but

////////////////////type casting////////////

///1.as
//2. angle bracket <>
let unknownValue: unknown = "hello";
unknownValue = 42; // Error: Type 'number' is not assignable to type 'unknown'.

let anyValue: any = "hello";
anyValue = 42; // Okay: any type is assignable to any.
//(anyValue as number)// doesnt modify the anyvalue
//(<number>anyValue)

//you can convert unknown type to any type but not known tyes
let abc = 5;
let xyz = "123";
//abc as string//error
abc as unknown as string; // u have to convert into unknown
console.log(<number>(<unknown>abc));
function fun1(value: number) {}
fun1(xyz as unknown as number);
let temp = (xyz as unknown as number);


