const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const form = document.getElementById("gifForm");
const input = document.getElementById("categoryInput");
const gifContainer = document.getElementById("gifContainer");
const deleteAllBtn = document.getElementById("deleteAllBtn");
const errorMsg = document.getElementById("errorMsg");

// Fetch 1 random gif by category/tag, then append it to the page
async function fetchRandomGifByCategory(category) {
  errorMsg.textContent = "";

  // Random endpoint uses "tag" for the category-like search term
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${encodeURIComponent(
    category
  )}&rating=g`;

  try {
    const response = await fetch(url);

    // Check HTTP status
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    const json = await response.json();
    console.log("GIPHY Random API response:", json);

    // The gif info is in json.data, and URLs are inside data.images
    // We'll use a common, reliable rendition:
    const gifUrl =
      json?.data?.images?.fixed_width?.url ||
      json?.data?.images?.original?.url;

    if (!gifUrl) {
      throw new Error("No GIF found for that category. Try another word.");
    }

    appendGif(gifUrl, category);
  } catch (err) {
    console.error("Fetch error:", err);
    errorMsg.textContent = err.message;
  }
}

// Create a GIF card with a DELETE button and append it
function appendGif(gifUrl, category) {
  const card = document.createElement("div");
  card.className = "gif-card";

  const img = document.createElement("img");
  img.src = gifUrl;
  img.alt = `Random gif for category: ${category}`;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "DELETE";

  // Delete only this gif card
  deleteBtn.addEventListener("click", () => {
    card.remove();
  });

  card.appendChild(img);
  card.appendChild(deleteBtn);
  gifContainer.appendChild(card);
}

// Handle form submit
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const category = input.value.trim();
  if (!category) return;

  fetchRandomGifByCategory(category);
  input.value = "";
  input.focus();
});

// Delete all gifs
deleteAllBtn.addEventListener("click", () => {
  gifContainer.innerHTML = "";
  errorMsg.textContent = "";
});