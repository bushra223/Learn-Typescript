// 1. Install [Node.js](https://nodejs.org/en/),
//[TypeScript](https://www.typescriptlang.org/download) and
// [VS Code](https://code.visualstudio.com/) on your computer.
function sumOfElements(numbers, type) {
    return numbers
        .filter(function (num) { return (type === "even" ? num % 2 === 0 : num % 2 !== 0); })
        .reduce(function (acc, curr) { return acc + curr; }, 0);
}
console.log(sumOfElements([2, 3, 4, 5], "odd"));
