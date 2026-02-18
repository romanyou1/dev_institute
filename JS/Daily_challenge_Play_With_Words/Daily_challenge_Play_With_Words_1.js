// Daily Challenge 1

function makeAllCaps(words) {
  return new Promise((resolve, reject) => {
    // Check if every element in the array is a string
    if (words.every(word => typeof word === "string")) {
      const uppercasedWords = words.map(word => word.toUpperCase());
      resolve(uppercasedWords);
    } else {
      reject("Error: Not all items in the array are strings!");
    }
  });
}

function sortWords(words) {
  return new Promise((resolve, reject) => {
    if (words.length > 4) {
      const sortedWords = words.sort();
      resolve(sortedWords);
    } else {
      reject("Error: Array length is less than or equal to 4!");
    }
  });
}

// Tests:
// Catch executed (contains a number)
makeAllCaps([1, "pear", "banana"])
  .then(arr => sortWords(arr))
  .then(result => console.log(result))
  .catch(error => console.log(error));


// Catch executed (length <= 4)
makeAllCaps(["apple", "pear", "banana"])
  .then(arr => sortWords(arr))
  .then(result => console.log(result))
  .catch(error => console.log(error));


// Success case
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
  .then(arr => sortWords(arr))
  .then(result => console.log(result))
  .catch(error => console.log(error));