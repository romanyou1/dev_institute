// Exercice 1
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// Part 1: Display choices using forEach
colors.forEach((color, index) => {
  console.log(`${index + 1}# choice is ${color}.`);
});


// Part 2: Check if "Violet" exists in the array
if (colors.includes("Violet")) {
  console.log("Yeah");
} else {
  console.log("No...");
}


// Exercice 2
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];

colors.forEach((color, index) => {
  let number = index + 1;

  // Use ternary operator to pick the right suffix
  let suffix =
    number === 1 ? ordinal[1] :
    number === 2 ? ordinal[2] :
    number === 3 ? ordinal[3] :
    ordinal[0];

  console.log(`${number}${suffix} choice is ${color}.`);
});


// Exercice 3
// Predictions + Explanations

// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

// Spread operator (...) expands arrays into individual elements
const result = ['bread', ...vegetables, 'chicken', ...fruits];

console.log(result);
// Prediction:
// ["bread", "carrot", "potato", "chicken", "apple", "orange"]
// Explanation:
// vegetables becomes "carrot", "potato"
// fruits becomes "apple", "orange"


// ------2------
const country = "USA";

// Spread works on strings too → splits into characters
console.log([...country]);

// Prediction:
// ["U", "S", "A"]
// Explanation:
// A string is iterable, so spread turns it into an array of letters


// ------Bonus------
let newArray = [...[,,]];
console.log(newArray);

// Prediction:
// [undefined, undefined]
// Explanation:
// [,,] is an array with 2 empty slots (holes)
// Spread converts holes into actual undefined values


// Exercice 4
const users = [
  { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
  { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
  { firstName: "Jonathan", lastName: "Baughn", role: "Enterprise Instructor" },
  { firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
  { firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
  { firstName: "Wes", lastName: "Reid", role: "Instructor" },
  { firstName: "Zach", lastName: "Klabunde", role: "Instructor" }
];

//////////////////////////////////////////////////////
// 1. Using map() → create welcomeStudents array

const welcomeStudents = users.map(user => `Hello ${user.firstName}`);

console.log(welcomeStudents);
// ["Hello Bradley", "Hello Chloe", "Hello Jonathan", "Hello Michael", "Hello Robert", "Hello Wes", "Hello Zach"]


//////////////////////////////////////////////////////
// 2. Using filter() → only Full Stack Residents

const fullStackResidents = users.filter(
  user => user.role === "Full Stack Resident"
);

console.log(fullStackResidents);
// Array of objects with role "Full Stack Resident"


//////////////////////////////////////////////////////
// 3. Bonus: Chain filter() + map() → last names only

const residentLastNames = users
  .filter(user => user.role === "Full Stack Resident")
  .map(user => user.lastName);

console.log(residentLastNames);
// ["Bouley", "Alnaji", "Hajek"]


// Exercice 5
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// Use reduce to combine into one string
const sentence = epic.reduce((accumulator, currentValue) => {
  return accumulator + " " + currentValue;
});

console.log(sentence);
// "a long time ago in a galaxy far far away"


// Exercice 6
const students = [
  { name: "Ray", course: "Computer Science", isPassed: true },
  { name: "Liam", course: "Computer Science", isPassed: false },
  { name: "Jenner", course: "Information Technology", isPassed: true },
  { name: "Marco", course: "Robotics", isPassed: true },
  { name: "Kimberly", course: "Artificial Intelligence", isPassed: false },
  { name: "Jamie", course: "Big Data", isPassed: false }
];

//////////////////////////////////////////////////////
// 1️⃣ Filter students who passed

const passedStudents = students.filter(student => student.isPassed);

console.log(passedStudents);
// Array containing Ray, Jenner, and Marco


//////////////////////////////////////////////////////
// 2️⃣ Bonus: Chain filter() with forEach()

students
  .filter(student => student.isPassed)
  .forEach(student => {
    console.log(
      `Good job ${student.name}, you passed the course in ${student.course}`
    );
  });

/*
Output:
Good job Ray, you passed the course in Computer Science
Good job Jenner, you passed the course in Information Technology
Good job Marco, you passed the course in Robotics
*/