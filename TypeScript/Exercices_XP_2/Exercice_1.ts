class Employee {
  // Private properties
  private name: string;
  private salary: number;

  // Public property
  public position: string;

  // Protected property
  protected department: string;

  // Constructor
  constructor(name: string, salary: number, position: string, department: string) {
    this.name = name;
    this.salary = salary;
    this.position = position;
    this.department = department;
  }

  // Public method
  public getEmployeeInfo(): string {
    return `Name: ${this.name}, Position: ${this.position}`;
  }
}

// Test the class
const emp = new Employee("Alice", 50000, "Developer", "IT");
console.log(emp.getEmployeeInfo()); // Name: Alice, Position: Developer