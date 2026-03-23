// Function implementation
function greet(name) {
    if (name === void 0) { name = "Guest"; }
    return "Hello, ".concat(name, "!");
}
// Test the function
console.log(greet()); // Hello, Guest!
console.log(greet("Alice")); // Hello, Alice!
