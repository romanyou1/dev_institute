// Function that returns a tuple
function getDetails(name, age) {
    var greeting = "Hello, ".concat(name, "! You are ").concat(age, " years old.");
    return [name, age, greeting];
}
// Call the function and log the result
var details = getDetails("Alice", 25);
console.log(details);
// Output: ['Alice', 25, 'Hello, Alice! You are 25 years old.']
