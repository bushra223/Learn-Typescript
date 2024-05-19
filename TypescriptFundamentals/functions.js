// Write a function calculateProduct that takes an array of numbers and returns the product of all elements
function calculateProducts(arr) {
    let product = 1; //so that array should not be zero when multiplied;
    for (let i = 0; i < arr.length; ++i)
        product *= arr[i];
    return product;
    // return arr.reduce((acc, num) => acc * num, 1);
}
console.log(`\n\t\tproduct of array elements in [4,3,2]=${calculateProducts([4, 3, 2])}`);
// Develop a function filterByLength that takes an array of strings and a number n. The function should return an array containing only the strings that are longer than n characters.
function filterByLength(arr, n) {
    let tempArr = [];
    for (let i = 0; i < arr.length; ++i)
        if (arr[i].length > n)
            tempArr.push(arr[i]);
    return tempArr;
    // //using built-in function
    //return arr.filter((element) => element.length > n);
}
console.log(`\nfilterBylength on array [apple,banana,grapes,kiwi,avocado,pomegranate,pear,peach,mango] ,n=5 :  ${filterByLength([
    "apple",
    "banana",
    "grapes",
    "kiwi",
    "avocado",
    "pomegranate",
    "pear",
    "peach",
    "mango",
], 5)}`);
// Create a function findDuplicates that finds and logs all duplicates in an array.
function findDuplicates(arr) {
    //arrTemp keeps record of all the indices of duplicate items in arr
    let arrTemp = [];
    console.log("original array", arr);
    console.log("\n\t\tduplicates are:");
    for (let i = 0; i < arr.length; ++i) {
        for (let j = i + 1; j < arr.length; ++j) {
            let flag = 1;
            if (arr[i] == arr[j]) {
                //below flag assignment is to push first the duplicate element at index i,this will hapen only once inside j loop
                if (flag == 1) {
                    flag = 0;
                    //first we will check if arrTemp already has an index of duplicate items, if not then it will push in arrtemp...this is to avoid repetition of indices already in arrTempt
                    if (!arrTemp.includes(i)) {
                        arrTemp.push(i);
                        console.log(arr[i], "at index", i);
                    }
                }
                //below code is to push all the remaining indices of duplicate items that for loop with j counter traverse
                if (!arrTemp.includes(j)) {
                    arrTemp.push(j);
                    console.log(arr[j], "at index", j);
                }
            }
        }
    }
}
findDuplicates([1, 7, 1, 3, 2, 4, 7, 7]);
// Write a function incrementAll that takes an array of integers and increments each element by one.
function incrementAll(arr) {
    return arr.map((element) => (element += 1));
}
console.log("incrementing each element in [4, 0, 2, 4, -1]=", incrementAll([4, 0, 2, 4, -1]));
// Develop a function countOccurrences that counts how many times a specific element appears in an array.
function countOccurrences(arr, element1) {
    return arr.filter((element) => element == element1).length;
}
console.log(`countOccurrences([3, 1,4, 2, 1, 6, 7, 7, 1, 2],1 )=count : ${countOccurrences([3, 1, 4, 2, 1, 6, 7, 7, 1, 2], 1)}`);
// Create a function isSorted that checks if an array is sorted in ascending order.
function isSorted(arr) {
    let flag = true;
    for (let i = 0; i < arr.length - 1; ++i) {
        if (arr[i + 1] < arr[i])
            flag = false;
    }
    return flag;
}
if (isSorted([2, 3, 4, 5, 6, 7, 0]))
    console.log("Array [2, 3, 4, 5, 6, 7, 0] is sorted");
else
    console.log("Array [2, 3, 4, 5, 6, 7, 0] is not sorted");
// Write a function that receives an array of names and formats them into a string separated by commas, except for the last two names, which should be separated by "and".
function formatNames(arr) {
    let formattedString = "";
    for (let i = 0; i < arr.length - 1; ++i)
        formattedString = formattedString + arr[i] + ", ";
    formattedString = formattedString + "and " + arr[arr.length - 1];
    return formattedString;
}
console.log(formatNames(["Anas", "Attique", "Bushra", "Bilal"]));
//or
// function formatNames(names: string[]): string {
// 	if (names.length < 2) {
// 		let arr = names.join("");
// 		console.log("hi", arr);
// 		return arr;
// 	}
// -1 means "end at the second-to-last element" (index names.length - 1).
// So, this slice excludes the last element of the original array.
// 	return `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}`;
// }
// Develop a function that converts an array of Fahrenheit temperatures to Celsius and logs the new temperatures.
function FahrenheitToCelsius(arr) {
    console.log(arr.map((element) => (element = Number(((element - 32) * (5 / 9)).toFixed(2)))));
}
FahrenheitToCelsius([37, 98.6, 100, 101, 102]);
function minMaxAverage(arr) {
    let obj = {};
    let average = 0;
    arr.sort();
    obj.minimum = arr[0];
    obj.maximum = arr[arr.length - 1];
    arr.forEach((element) => {
        average += element;
    });
    average = average / arr.length;
    obj.average = average;
    return obj;
}
console.log(minMaxAverage([5, 3, 2, 1.0]));
//or
/*
function minMaxAverage(numbers: number[]): {
      min: number;
      max: number;
      average: number;
    } {
      const min = Math.min(...numbers);
      const max = Math.max(...numbers);
      const average =
        numbers.reduce((sum, current) => sum + current, 0) / numbers.length;
      return { min, max, average };
    }
    */
// Create a function swapElements that swaps two specified indices in an array.
function swapElements(arr, index1, index2) {
    let temp = arr[index2];
    arr[index2] = arr[index1];
    arr[index1] = temp;
    return arr;
}
console.log(swapElements([7, 6, 4, 90, 0, 9, 6, 5, 4, 3], 3, 0));
let fname = {};
fname = 56;
console.log(fname);
export {};
