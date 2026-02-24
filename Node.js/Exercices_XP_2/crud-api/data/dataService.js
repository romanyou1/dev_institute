// Exercice 3

const axios = require("axios");

async function fetchPosts() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const response = await axios.get(url);
  return response.data; // array of posts
}

module.exports = { fetchPosts };

// Go to app.js