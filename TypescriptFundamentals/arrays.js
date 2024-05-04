// Write a function that takes an array of words and returns a new array containing only the words that start with the letter 'a'.
function findWords(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i].charAt(0) == "a" || arr[i].charAt(0) == "A")
            newArr.push(arr[i]);
    }
    return newArr;
}
let words = ["bushra", "anas", "bilal", "attique", "hafsa", "mamoona"];
console.log(findWords(words));
// Create a script that logs the second to last element of an array named fruits.
let fruits = ["apple", "banana", "grapes", "kiwi"];
console.log(fruits[fruits.length - 2]);
// Develop a function that takes an array of numbers and returns a new array with each number squared.
let arrNum = [1, 2, 3, 4, 5, 5, 6, 7];
function makeSquare(arr) {
    let arrTemp = [];
    arr.forEach((element) => {
        arrTemp.push(element ** 2);
    });
    return arrTemp;
}
console.log(makeSquare(arrNum));
// Write a JavaScript function that accepts an array and reverses its elements without using the .reverse() method. Log the result.
function reverseArray(arr) {
    let elementAtStart;
    for (let i = 1; i <= Math.floor(arr.length / 2); ++i) {
        elementAtStart = arr[i - 1];
        arr[i - 1] = arr[arr.length - i];
        arr[arr.length - i] = elementAtStart;
    }
    return arr;
}
console.log(reverseArray(["bushra", 3, 6, "attique", true, 0]));
// Given an array scores [10, 5, 20, 20, 4, 5, 2, 25, 1],
//write a function that logs the number of times the score exceeded the maximum score
//and the number of times it fell below the minimum score.
let maxScore = 20, minScore = 5;
function countMinMax(arr) {
    let maxCount = 0, minCount = 0;
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] > maxScore)
            ++maxCount;
        else if (arr[i] < minScore)
            ++minCount;
    }
    console.log(`The score exceeded from the max score(20)= ${maxCount} times and it fell below the minimum score(5) = ${minCount} times`);
}
countMinMax([10, 5, 20, 20, 4, 5, 2, 25, 1]);
// Create a function that removes all falsey values from an array. Falsy values include false, null, 0, "", undefined, and NaN.
//method 1
function removeFalsyValues(arr) {
    for (let i = 0; i < arr.length; ++i) {
        //typecasting of boolean will give always true except for false,undefined,Nan,0 or empty string
        if (!Boolean(arr[i])) {
            arr.splice(i, 1);
            --i;
        }
    }
    return arr;
}
console.log(removeFalsyValues([1, 2, 3, 0, false, true, undefined, "bushra", NaN]));
//method 2
let arr = [1, 2, 3, 0, false, true, undefined, "bushra", NaN, ""];
console.log(arr.filter((x) => x));
// Write a script that concatenates two arrays [1, 2, 3] and [4, 5, 6] into a single array.
let arr1 = [1, 2, 3], arr2 = [4, 5, 6], arr3 = [];
arr3 = arr1.concat(arr2);
console.log("After concatenation: ", arr3);
// Develop a function called sumOfElements that calculates the sum of all elements in an array that are either even or odd, based on a parameter.
function calculateSum(criteria, arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; ++i) {
        if (criteria == "even" && arr[i] % 2 == 0)
            sum = sum + arr[i];
        else if (criteria == "odd" && arr[i] % 2 != 0)
            sum = sum + arr[i];
    }
    return sum;
}
console.log("Test array:", [1, 2, 2, 3, 4, 5, 5, 6, 7]);
console.log("sum of even numbers in test array:", calculateSum("even", [1, 2, 2, 3, 4, 5, 5, 6, 7]));
console.log("sum of odd numbers in test array:", calculateSum("odd", [1, 2, 2, 3, 4, 5, 5, 6, 7]));
// Create a function that checks whether an element exists in an array. If it exists, return the index, otherwise return -1.
function isExist1(arr, element1) {
    return arr.findIndex((elm) => elm == element1);
}
let arrayTemp = [2, 3, "bushra"];
console.log(isExist1(arrayTemp, "bushra"));
// Write a function to find and return the smallest number in an array of integers.
//method 1
function findSmallest(arr) {
    arr.sort();
    return arr[0];
}
console.log("smallest number in [4,5,6,3,2,0,-1] is:", findSmallest([4, 5, 6, 3, 2, 0, -1]));
//method 2
function findSmallest2(arr) {
    let smallest = arr[0];
    for (let i = 1; i <= arr.length; ++i) {
        if (arr[i] < smallest)
            smallest = arr[i];
    }
    return smallest;
}
console.log("smallest number in [4,5,6,3,2,0,-1] is:", findSmallest2([4, 5, 6, 3, 2, 0, -1]));
export {};
