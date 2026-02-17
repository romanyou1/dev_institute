let client = "John";

const groceries = {
  fruits: ["pear", "apple", "banana"],
  vegetables: ["tomatoes", "cucumber", "salad"],
  totalPrice: "20$",
  other: {
    paid: true,
    meansOfPayment: ["cash", "creditCard"]
  }
};

//////////////////////////////////////////////////////
// Arrow function to display the fruits
const displayGroceries = () => {
  groceries.fruits.forEach(fruit => console.log(fruit));
};

// Test it
displayGroceries();


//////////////////////////////////////////////////////
// Arrow function to clone groceries
const cloneGroceries = () => {

  // Copy of primitive (Pass By Value)
  let user = client;

  // Change original variable
  client = "Betty";

  console.log("client:", client); // Betty
  console.log("user:", user);     // John

  // Will user change?
  // No. Because strings are primitive types and are passed by value.
  // user got a copy of "John", so changing client doesn't affect user.


  // Copy of object (Pass By Reference)
  let shopping = groceries;

  // Modify object properties
  groceries.totalPrice = "35$";
  groceries.other.paid = false;

  console.log("groceries:", groceries);
  console.log("shopping:", shopping);

  // Will shopping reflect the changes?
  // Yes. Because objects are passed by reference.
  // shopping and groceries point to the same object in memory.
  // Therefore, changing totalPrice or paid affects both.
};

// Invoke the function
cloneGroceries();