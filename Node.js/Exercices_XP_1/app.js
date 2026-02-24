import objects from "./data.js";

function calculateAverageAge(people) {
  const totalAge = people.reduce((sum, person) => sum + person.age, 0);
  const averageAge = totalAge / people.length;

  console.log(`Average Age: ${averageAge}`);
}

calculateAverageAge(objects);