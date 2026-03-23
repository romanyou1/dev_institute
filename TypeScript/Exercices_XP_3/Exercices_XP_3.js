//Exercise 1: Intersection Types
var personWithAddress = {
    name: "Alice",
    age: 28,
    street: "123 Main Street",
    city: "New York",
};
console.log(personWithAddress);
//Exercise 2: Type Guards With Union Types
function describeValue(value) {
    if (typeof value === "number") {
        return "This is a number";
    }
    if (typeof value === "string") {
        return "This is a string";
    }
    return "Unknown type";
}
console.log(describeValue(42));
console.log(describeValue("hello"));
//Exercise 3: Type Casting
var someValue = "TypeScript is great";
var strValue = someValue;
console.log(strValue.toUpperCase());
//Exercise 4: Type Assertions With Union Types
function getFirstElement(arr) {
    return arr[0];
}
console.log(getFirstElement(["hello", 42, "world"]));
console.log(getFirstElement(["TypeScript", "JS", 100]));
// Note:
// If the first element is actually a number, this assertion is not truly safe.
// Safer version:
function getFirstElementSafe(arr) {
    return String(arr[0]);
}
console.log(getFirstElementSafe([123, "abc"]));
//Exercise 5: Generic Constraints
function logLength(item) {
    console.log("Length:", item.length);
}
logLength("Hello");
logLength([1, 2, 3, 4]);
logLength({ length: 10 });
function describeEmployee(employee) {
    if (employee.position === "Manager") {
        return "".concat(employee.name, " is a Manager in the ").concat(employee.department, " department.");
    }
    if (employee.position === "Developer") {
        return "".concat(employee.name, " is a Developer in the ").concat(employee.department, " department.");
    }
    return "".concat(employee.name, " works as a ").concat(employee.position, " in the ").concat(employee.department, " department.");
}
var manager = {
    name: "John",
    age: 35,
    position: "Manager",
    department: "Sales",
};
var developer = {
    name: "Emma",
    age: 27,
    position: "Developer",
    department: "Engineering",
};
console.log(describeEmployee(manager));
console.log(describeEmployee(developer));
//Exercise 7: Type Assertions And Generic Constraints
function formatInput(input) {
    var formatted = input.toString();
    return "Formatted: ".concat(formatted);
}
console.log(formatInput(123));
console.log(formatInput(true));
console.log(formatInput("hello"));
