function checkNumber(num) {
    if (num > 0) {
        return "Positive";
    }
    else if (num < 0) {
        return "Negative";
    }
    else {
        return "Zero";
    }
}
// Example usage
console.log(checkNumber(10)); // Positive
console.log(checkNumber(-5)); // Negative
console.log(checkNumber(0)); // Zero
