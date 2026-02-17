// Exercice 1

/**
 * Predictions + explanations (JavaScript)
 *
 * Key ideas used below:
 * - `let` is block-scoped and can be reassigned.
 * - `const` is block-scoped but cannot be reassigned (you must initialize it, and you can’t later do `a = ...`).
 * - A variable declared in an inner scope with `let/const` *shadows* an outer variable with the same name.
 * - In browsers, `window.x = ...` creates/sets a global property; reading `x` (undeclared) can then resolve to that global property.
 *   (In strict mode, *assigning* to an undeclared identifier throws, but here we assign via `window.a`, which is allowed.)
 */

///////////////////////////
// #1
function funcOne() {
  let a = 5;

  // a is 5 here.
  if (a > 1) {
    // condition is true (5 > 1), so we reassign a:
    a = 3;
  }

  // Prediction: alerts "inside the funcOne function 3"
  alert(`inside the funcOne function ${a}`);
}

// #1.1
// funcOne() -> alerts 3 (because a becomes 3 inside the if)

// #1.2 If `const` instead of `let`?
// - `const a = 5;` is fine
// - but `a = 3;` would throw: TypeError (Assignment to constant variable).
// So the function would error at the reassignment and would not reach the alert.


///////////////////////////
// #2
let a = 0;

function funcTwo() {
  // This does NOT declare a new variable; it reassigns the existing outer/global `a`.
  a = 5;
}

function funcThree() {
  // Reads the current value of the outer/global `a`.
  alert(`inside the funcThree function ${a}`);
}

// #2.1
// Initial a = 0
// funcThree() -> alerts "0"
// funcTwo()   -> sets a to 5
// funcThree() -> alerts "5"

// #2.2 If `const` instead of `let`?
// - `const a = 0;` is fine
// - but then `a = 5;` inside funcTwo would throw TypeError (Assignment to constant variable).
// So the first funcThree would still alert 0, then funcTwo would crash, and the last funcThree would never run.


///////////////////////////
// #3
function funcFour() {
  // Sets a property on the global window object.
  // In a browser, this effectively makes `a` available as a global (window.a).
  window.a = "hello";
}

function funcFive() {
  // No local `a` is declared, so it resolves to the global `a` (window.a) after funcFour ran.
  // Prediction (after funcFour): alerts "hello"
  alert(`inside the funcFive function ${a}`);
}

// #3.1
// funcFour() -> sets window.a = "hello"
// funcFive() -> alerts "hello"


///////////////////////////
// #4
let a = 1;

function funcSix() {
  // This `a` is a NEW block/function-scoped variable that shadows the outer `a`.
  let a = "test";

  // Prediction: alerts "inside the funcSix function test"
  // (Outer a=1 is unaffected.)
  alert(`inside the funcSix function ${a}`);
}

// #4.1
// funcSix() -> alerts "test"

// #4.2 If `const` instead of `let` inside funcSix?
// - `const a = "test";` works the same here, because we never reassign it.
// So it still alerts "test".


///////////////////////////
// #5
let a = 2;

if (true) {
  // This `a` is block-scoped to the if-block and shadows the outer `a`.
  let a = 5;

  // Prediction: alerts "in the if block 5"
  alert(`in the if block ${a}`);
}

// Outside the block, we’re back to the outer `a` (still 2).
// Prediction: alerts "outside of the if block 2"
alert(`outside of the if block ${a}`);

// #5.1
// Alerts: first 5, then 2

// #5.2 If `const` instead of `let`?
// - `const a = 2;` and `const a = 5;` (inside the block) both work,
//   because they are in different scopes, and we are not reassigning.
// Same output: first 5, then 2.


// Exercice 2
// Transform winBattle into an arrow function
const winBattle = () => true;

// Create variable experiencePoints
// Use ternary operator:
// If winBattle() returns true → 10
// Else → 1
let experiencePoints = winBattle() ? 10 : 1;

// Log the result
console.log(experiencePoints); // 10


// Exercice 3
// Arrow function to check if a value is a string
const isString = (value) => typeof value === "string";

// Examples
console.log(isString("hello")); 
// true

console.log(isString([1, 2, 4, 0])); 
// false


// Exercice 4
// One-line arrow function that returns the sum of two numbers
const sum = (num1, num2) => num1 + num2;

console.log(sum(5, 10)); // 15


// Exercice 5
// Function Declaration
function kgToGramsDecl(kg) {
  return kg * 1000;
}

console.log(kgToGramsDecl(2)); // 2000


// Function Expression
const kgToGramsExpr = function (kg) {
  return kg * 1000;
};

console.log(kgToGramsExpr(3)); // 3000


// Difference: Function declarations are hoisted (can be called before they are defined), while function expressions are not.


// Arrow Function (one line)
const kgToGramsArrow = (kg) => kg * 1000;

console.log(kgToGramsArrow(5)); // 5000


// Exercice 6
// Self-invoking function (IIFE) with 4 arguments
(function (children, partnerName, location, jobTitle) {
  // Create the sentence
  const sentence = `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${children} kids.`;

  // Display it in the DOM
  document.body.innerHTML += `<p>${sentence}</p>`;
})(3, "Emma", "Paris", "Software Developer");


// Exercice 7 (See "index.html" and "script.js")


// Exercice 8
// Part 1
function makeJuice(size) {

  // Inner function
  function addIngredients(ing1, ing2, ing3) {
    const sentence = `The client wants a ${size} drink juice, containing ${ing1}, ${ing2}, ${ing3}.`;
    document.body.innerHTML += `<p>${sentence}</p>`;
  }

  // Invoke inner function ONCE
  addIngredients("apple", "banana", "mango");
}

// Invoke outer function in global scope
makeJuice("medium");

// Part 2
function makeJuice(size) {

  // Empty array
  const ingredients = [];

  // Inner function to add ingredients
  function addIngredients(ing1, ing2, ing3) {
    ingredients.push(ing1, ing2, ing3);
  }

  // Inner function to display juice
  function displayJuice() {
    const sentence = `The client wants a ${size} drink juice, containing ${ingredients.join(", ")}.`;
    document.body.innerHTML += `<p>${sentence}</p>`;
  }

  // Client wants 6 ingredients → call twice
  addIngredients("apple", "banana", "mango");
  addIngredients("orange", "pineapple", "strawberry");

  // Display once
  displayJuice();
}

// Invoke outer function
makeJuice("large");