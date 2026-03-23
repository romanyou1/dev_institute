//Exercise 1: Intersection Types

type Person = {
  name: string;
  age: number;
};

type Address = {
  street: string;
  city: string;
};

type PersonWithAddress = Person & Address;

const personWithAddress: PersonWithAddress = {
  name: "Alice",
  age: 28,
  street: "123 Main Street",
  city: "New York",
};

console.log(personWithAddress);


//Exercise 2: Type Guards With Union Types

function describeValue(value: number | string): string {
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

let someValue: any = "TypeScript is great";

let strValue = someValue as string;

console.log(strValue.toUpperCase());


//Exercise 4: Type Assertions With Union Types

function getFirstElement(arr: (number | string)[]): string {
  return arr[0] as string;
}

console.log(getFirstElement(["hello", 42, "world"]));
console.log(getFirstElement(["TypeScript", "JS", 100]));

// Note:
// If the first element is actually a number, this assertion is not truly safe.
// Safer version:
function getFirstElementSafe(arr: (number | string)[]): string {
  return String(arr[0]);
}

console.log(getFirstElementSafe([123, "abc"]));


//Exercise 5: Generic Constraints

function logLength<T extends { length: number }>(item: T): void {
  console.log("Length:", item.length);
}

logLength("Hello");
logLength([1, 2, 3, 4]);
logLength({ length: 10 });


//Exercise 6: Intersection Types And Type Guards

type Person2 = {
  name: string;
  age: number;
};

type Job = {
  position: string;
  department: string;
};

type Employee = Person2 & Job;

function describeEmployee(employee: Employee): string {
  if (employee.position === "Manager") {
    return `${employee.name} is a Manager in the ${employee.department} department.`;
  }

  if (employee.position === "Developer") {
    return `${employee.name} is a Developer in the ${employee.department} department.`;
  }

  return `${employee.name} works as a ${employee.position} in the ${employee.department} department.`;
}

const manager: Employee = {
  name: "John",
  age: 35,
  position: "Manager",
  department: "Sales",
};

const developer: Employee = {
  name: "Emma",
  age: 27,
  position: "Developer",
  department: "Engineering",
};

console.log(describeEmployee(manager));
console.log(describeEmployee(developer));


//Exercise 7: Type Assertions And Generic Constraints

function formatInput<T extends { toString(): string }>(input: T): string {
  const formatted = input.toString() as string;
  return `Formatted: ${formatted}`;
}

console.log(formatInput(123));
console.log(formatInput(true));
console.log(formatInput("hello"));