class Animal {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public makeSound(): string {
    return "Some generic animal sound";
  }
}

class Dog extends Animal {
  public makeSound(): string {
    return "bark";
  }
}

const dog = new Dog("Buddy");
console.log(dog.name);         // Buddy
console.log(dog.makeSound());  // bark