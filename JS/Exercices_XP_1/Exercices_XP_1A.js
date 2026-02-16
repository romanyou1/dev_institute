//Exercice 1

const people = ["Greg", "Mary", "Devon", "James"];

// To remove "Greg"
people.pop("Greg");

// Replace "James" to "Jason"
let deletedItem = colors.splice(3, 3, "Jason");

// Add my name at the end of the array
people.push("Andre");

// console.log Mary's index
console.log(people.indexOf("Mary"));

// Making a slice copy
let copy = people.slice(1, 3);
console.log(copy);

// Get the index of "Foo"
console.log(people.indexOf("Foo"));

// Create a variable "last" with the last element
let last = people[people.length - 1];
console.log(last);


//Exercice 2
const colors = ["Black", "Red", "Orange", "Olive green", "Klein Blue"]

for (let i = 0; i < colors.length; i++) {
  console.log(`My #${i + 1} choice is ${colors[i]}`);
}

// Bonus
const suffixes = ["st", "nd", "rd", "th", "th"];

for (let i = 0; i < colors.length; i++) {
  console.log(`My ${i + 1}${suffixes[i]} choice is ${colors[i]}`);
}


// Exercice 3
let number = prompt("Enter a number:");

console.log(typeof number); // string

number = Number(number); // convert string to number

while (number < 10) {
  number = prompt("Number is too small. Enter a new number:");
  number = Number(number);
}

console.log("Great! Your number is at least 10.");


//Exercice 4
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

// console.log the number of floors in the building
console.log(building.numberOfFloors);

//Console.log how many apartments are on the floors 1 and 3
console.log(building.numberOfAptByFloor.firstFloor);
console.log(building.numberOfAptByFloor.thirdFloor);

//Console.log the name of the second tenant and the number of rooms he has
console.log(
  building.nameOfTenants[1] + 
  " has " + 
  building.numberOfRoomsAndRent.dan[0] + 
  " rooms."
);

//Compare rents and update Dan’s rent if needed

//Get rents
let sarahRent = building.numberOfRoomsAndRent.sarah[1];
let davidRent = building.numberOfRoomsAndRent.david[1];
let danRent = building.numberOfRoomsAndRent.dan[1];

//Compare
if (sarahRent + davidRent > danRent) {
  building.numberOfRoomsAndRent.dan[1] = 1200;
}

//Check result
console.log(building.numberOfRoomsAndRent.dan[1]);


//Exercice 5

// Create the object
const family = {
  father: "Michael",
  mother: "Sarah",
  sister: "Emma",
  brother: "Lucas",
};

// Log the Keys
for (let key in family) {
  console.log(key);
}

//Log the values
for (let key in family) {
	console.log(family[key]);
}


// Exercice 6
const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}

let sentence = "";

for (let key in details) {
  sentence += key + " " + details[key] + " ";
}

console.log(sentence.trim());


// Exercice 7
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// 1️⃣ Sort the names alphabetically
names.sort();

// 2️⃣ Create an empty string
let societyName = "";

// 3️⃣ Loop through sorted names
for (let i = 0; i < names.length; i++) {
  societyName += names[i][0]; // First letter
}

// 4️⃣ Print result
console.log(societyName);