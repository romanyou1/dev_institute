const _ = require("lodash");
const { add, multiply } = require("./math");

// Using custom math module
const sum = add(10, 5);
const product = multiply(4, 6);

// Using lodash utility functions
const numbers = [1, 2, 3, 4, 5];

const maxNumber = _.max(numbers);
const minNumber = _.min(numbers);
const shuffledNumbers = _.shuffle(numbers);

console.log("Addition:", sum);
console.log("Multiplication:", product);
console.log("Max number:", maxNumber);
console.log("Min number:", minNumber);
console.log("Shuffled numbers:", shuffledNumbers);