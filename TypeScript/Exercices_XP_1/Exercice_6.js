// Create the function
function createPerson(name, age) {
    return {
        name: name,
        age: age,
    };
}
// Test the function
var person = createPerson("Alice", 25);
console.log(person);
// Output: { name: 'Alice', age: 25 }
