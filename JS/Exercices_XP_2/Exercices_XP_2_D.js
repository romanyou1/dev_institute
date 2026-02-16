// Exercice 7

// 1) Create the array of book objects
const allBooks = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    image: "https://upload.wikimedia.org/wikipedia/en/4/4a/TheHobbit_FirstEdition.jpg",
    alreadyRead: true
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    image: "https://upload.wikimedia.org/wikipedia/en/1/16/Atomic_Habits.jpg",
    alreadyRead: false
  }
];

// 2) Select the section
const section = document.querySelector(".listBooks");

// 3) Render each book into a div inside the section
for (let book of allBooks) {
  // Create a container div for each book
  const bookDiv = document.createElement("div");

  // Create the text: "Title written by Author"
  const details = document.createElement("p");
  details.textContent = `${book.title} written by ${book.author}`;

  // If already read -> make text red
  if (book.alreadyRead) {
    details.style.color = "red";
  }

  // Create the image
  const img = document.createElement("img");
  img.src = book.image;
  img.style.width = "100px";
  img.alt = `${book.title} cover`;

  // Append details + image into the div
  bookDiv.appendChild(details);
  bookDiv.appendChild(img);

  // Append div into the section
  section.appendChild(bookDiv);
}