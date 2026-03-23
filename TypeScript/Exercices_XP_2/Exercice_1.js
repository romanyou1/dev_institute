var Employee = /** @class */ (function () {
    // Constructor
    function Employee(name, salary, position, department) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }
    // Public method
    Employee.prototype.getEmployeeInfo = function () {
        return "Name: ".concat(this.name, ", Position: ").concat(this.position);
    };
    return Employee;
}());
// Test the class
var emp = new Employee("Alice", 50000, "Developer", "IT");
console.log(emp.getEmployeeInfo()); // Name: Alice, Position: Developer
