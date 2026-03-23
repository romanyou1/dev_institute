// Function to validate union types
function validateUnionType(value, allowedTypes) {
    var valueType = typeof value;
    for (var _i = 0, allowedTypes_1 = allowedTypes; _i < allowedTypes_1.length; _i++) {
        var type = allowedTypes_1[_i];
        if (valueType === type) {
            return true;
        }
    }
    return false;
}
// Test variables
var name = "Alice";
var age = 25;
var isActive = true;
var data = { key: "value" };
// Validate types
console.log(validateUnionType(name, ["string", "number"])); // true
console.log(validateUnionType(age, ["string", "boolean"])); // false
console.log(validateUnionType(isActive, ["boolean"])); // true
console.log(validateUnionType(data, ["object"])); // true
