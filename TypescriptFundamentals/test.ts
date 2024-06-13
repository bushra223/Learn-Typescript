//let arr:string[]|number[]=[1,'hello']; //error
let arr1:(string|number)[]=[1,'hello'];//ok
let arr2=[1,'hello'];//ok
//let arr3:string|number[]=[1,'hello'];//error
function checkParamName(name:string):void{
    console.log(name);
    
}
checkParamName('Bushra');


