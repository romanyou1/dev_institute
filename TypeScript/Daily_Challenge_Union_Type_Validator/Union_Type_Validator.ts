// Function to validate union types
function validateUnionType(value: any, allowedTypes: string[]): boolean {
  const valueType = typeof value;

  for (let type of allowedTypes) {
    if (valueType === type) {
      return true;
    }
  }

  return false;
}

// Test variables
let name = "Alice";
let age = 25;
let isActive = true;
let data = { key: "value" };

// Validate types
console.log(validateUnionType(name, ["string", "number"]));   // true
console.log(validateUnionType(age, ["string", "boolean"]));   // false
console.log(validateUnionType(isActive, ["boolean"]));        // true
console.log(validateUnionType(data, ["object"]));             // true