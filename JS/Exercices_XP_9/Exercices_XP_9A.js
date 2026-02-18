// Exercice 1
// Giphy API Search URL
const giphyURL =
  "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

// Fetch data from Giphy API
fetch(giphyURL)
  .then((response) => {
    // Check if the request was successful
    if (!response.ok) {
      throw new Error("Response status error: " + response.status);
    }

    // Convert response into JSON
    return response.json();
  })
  .then((data) => {
    // Log the full JavaScript object received from the API
    console.log("Giphy API Data:", data);
  })
  .catch((error) => {
    // Catch any errors that occur
    console.error("Fetch error:", error);
  });


// Exercice 2
// Giphy Search Endpoint URL
const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const searchTerm = "sun";
const limit = 10;
const offset = 2;

const giphyURL = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&limit=${limit}&offset=${offset}&api_key=${apiKey}`;

// Fetch request
fetch(giphyURL)
  .then(response => {
    // Check if response was successful
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Log the full JavaScript object
    console.log("Giphy API Response:", data);
  })
  .catch(error => {
    // Handle errors
    console.error("Fetch error:", error);
  });


  // Exercice 3
  // Async function to fetch Death Star data
async function getStarship() {
  try {
    const response = await fetch("https://www.swapi.tech/api/starships/9/");

    // Check if request was successful
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    // Convert response to JSON
    const data = await response.json();

    // Log the result object
    console.log(data.result.properties);

  } catch (error) {
    // Catch and display errors
    console.error("Fetch error:", error);
  }
}

// Call the function
getStarship();


// Exercice 4
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

/*
Expected Console Output:

calling
(resolves after 2 seconds)
resolved
*/
