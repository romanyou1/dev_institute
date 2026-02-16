// Exercice 1
function displayNumbersDivisible() {
  let sum = 0;
  let result = "";

  for (let i = 0; i <= 500; i++) {
    if (i % 23 === 0) {
      console.log(i);
      sum += i;
      result += i + " ";
    }
  }

  console.log("Outcome :", result);
  console.log("Sum :", sum);
}

displayNumbersDivisible();

// Bonus
function displayNumbersDivisible(divisor) {
  let sum = 0;
  let result = "";

  for (let i = 0; i <= 500; i++) {
    if (i % divisor === 0) {
      result += i + " ";
      sum += i;
    }
  }

  console.log(`Outcome : ${result}`);
  console.log(`Sum : ${sum}`);
}


// Exercice 2

const stock = { 
  banana: 6, 
  apple: 0,
  pear: 12,
  orange: 32,
  blueberry: 1
};

const prices = {    
  banana: 4, 
  apple: 2, 
  pear: 1,
  orange: 1.5,
  blueberry: 10
};

// Create the shopping list
const shoppingList = ["banana", "orange", "apple"];

// Create the Function myBill()
function myBill() {
  let total = 0;

  for (let item of shoppingList) {

    // Check if item exists in stock
    if (item in stock && stock[item] > 0) {

      // Add the price
      total += prices[item];

      // Bonus: decrease stock by 1
      stock[item]--;

    } else {
      console.log(`${item} is out of stock`);
    }
  }

  return total;
}

// Call the fonction
console.log("Total bill:", myBill());

// Bonus
console.log("Updated stock:", stock);


// Exercice 3
function changeEnough(price, change) {
  const values = [0.25, 0.10, 0.05, 0.01];

  let total = 0;

  for (let i = 0; i < change.length; i++) {
    total += change[i] * values[i];
  }

  return total >= price;
}


// Exercice 4

// First version
function totalVacationCost() {
  let hotel = hotelCost();
  let plane = planeRideCost();
  let car = rentalCarCost();

  let total = hotel + plane + car;

  console.log(`The hotel cost: $${hotel}`);
  console.log(`The plane tickets cost: $${plane}`);
  console.log(`The car rental cost: $${car}`);
  console.log(`Total vacation cost: $${total}`);

  return total;
}

totalVacationCost();

// Bonus Version
function totalVacationCost() {

  let nights;
  do {
    nights = prompt("How many hotel nights?");
  } while (isNaN(nights) || nights === "" || nights === null);

  let destination;
  do {
    destination = prompt("What is your destination?");
  } while (!destination || !isNaN(destination));

  let days;
  do {
    days = prompt("How many days for the car rental?");
  } while (isNaN(days) || days === "" || days === null);

  nights = Number(nights);
  days = Number(days);

  let hotel = hotelCost(nights);
  let plane = planeRideCost(destination);
  let car = rentalCarCost(days);

  let total = hotel + plane + car;

  console.log(`The hotel cost: $${hotel}`);
  console.log(`The plane tickets cost: $${plane}`);
  console.log(`The car rental cost: $${car}`);
  console.log(`Total vacation cost: $${total}`);

  return total;
}

totalVacationCost();


// Exercice 5 (see "Exercices_XP_2_B.js" and "index1.html")

// Exercice 6 (see "Exercices_XP_2_C.js" and "index2.html")

// Exercice 7 (see "Exercices_XP_2_D.js" and "index3.html")
