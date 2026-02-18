// Exercice 1
function compareToTen(num) {
  return new Promise((resolve, reject) => {
    if (num <= 10) {
      resolve(`${num} is less than or equal to 10`);
    } else {
      reject(`${num} is greater than 10`);
    }
  });
}

// Test
// In this example, the promise should reject
compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error));

// In this example, the promise should resolve
compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error));


// Exercice 2
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  }, 4000);
});

// Test it
myPromise.then(result => console.log(result));


// Exercice 3
// Promise that resolves with value "3"
const resolvedPromise = Promise.resolved(3);

// Promise that reject with value "Boo!"
const rejectedPromise = Promise.reject("Boo!");

// Test
resolvedPromise
	.then(value => console.log(value))
	.catch(error => console.log(error));

rejectedPromise
	.then(value => console.log(value))
	.catch(error => console.log(error));