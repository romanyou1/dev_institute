// Exercice 1

const person = {
  name: 'John Doe',
  age: 25,
  location: {
    country: 'Canada',
    city: 'Vancouver',
    coordinates: [49.2827, -123.1207]
  }
};

// Destructuring the object:
const {
  name, // takes person.name

  location: {
    country, // takes person.location.country
    city,    // takes person.location.city

    coordinates: [lat, lng] // destructures the array inside coordinates
    // lat = 49.2827
    // lng = -123.1207
  }
} = person;

// Output
console.log(
  `I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`
);

/*
Prediction of output:

I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

Explanation:
- name comes from the main object
- country and city come from the nested location object
- lat and lng come from the coordinates array using array destructuring
*/


// Exercice 2
function displayStudentInfo(objUser) {
  // Destructure the object parameter
  const { first, last } = objUser;

  // Return the required string
  return `Your full name is ${first} ${last}`;
}

// Invoke the function
console.log(displayStudentInfo({ first: "Elie", last: "Schoppik" }));

// Output:
// Your full name is Elie Schoppik


// Exercice 3
const users = { user1: 18273, user2: 92833, user3: 90315 };

//////////////////////////////////////////////////////
// 1. Turn the users object into an array

const usersArray = Object.entries(users);

console.log(usersArray);
/*
Expected output:
[
  ['user1', 18273],
  ['user2', 92833],
  ['user3', 90315]
]
*/


//////////////////////////////////////////////////////
// 2. Multiply each user ID by 2

const updatedUsersArray = Object.entries(users).map(([user, id]) => {
  return [user, id * 2];
});

console.log(updatedUsersArray);
/*
Expected output:
[
  ['user1', 36546],
  ['user2', 185666],
  ['user3', 180630]
]
*/


// Exercice 4
class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member);
// The output will be "object".


// Exercice 5
class Dog {
  constructor(name) {
    this.name = name;
  }
};

// To extend it the second option is the best way.
class Labrador extends Dog {
  constructor(name, size) {
    super(name); // calls Dog constructor
    this.size = size; // adds new property
  }
};


// Exercice 6
[2] === [2]      // false
{} === {}        // false

const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5 };

object1.number = 4;

console.log(object2.number) // ?
console.log(object3.number) // ?
console.log(object4.number) // ?

// Parent class
class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

// Child class
class Mammal extends Animal {
  sound(animalSound) {
    return `${animalSound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
  }
}

// Create instance
const farmerCow = new Mammal("Lily", "cow", "brown and white");

// Call method
console.log(farmerCow.sound("Moooo"));

