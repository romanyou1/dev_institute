var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.add = function (a, b) {
        return a + b;
    };
    Calculator.subtract = function (a, b) {
        return a - b;
    };
    return Calculator;
}());
console.log(Calculator.add(10, 5)); // 15
console.log(Calculator.subtract(10, 5)); // 5
