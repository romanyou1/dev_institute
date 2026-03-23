// Function overload signatures
function greet(): string;
function greet(name: string): string;

// Function implementation
function greet(name: string = "Guest"): string {
  return `Hello, ${name}!`;
}

// Test the function
console.log(greet());         // Hello, Guest!
console.log(greet("Alice"));  // Hello, Alice!