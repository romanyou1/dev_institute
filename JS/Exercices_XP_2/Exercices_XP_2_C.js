// Exercice 6

// 1) Change the div id from navBar to socialNetworkNavigation

const navDiv = document.getElementById("navBar");

navDiv.setAttribute("id", "socialNetworkNavigation");


// 2) Add a new <li> with “Logout”

// Select the <ul>
const ul = navDiv.querySelector("ul");

// Create new <li>
const newLi = document.createElement("li");

// Create text node
const textNode = document.createTextNode("Logout");

// Append text to <li>
newLi.appendChild(textNode);

// Append <li> to <ul>
ul.appendChild(newLi);


// 3) Display the text of the first and last <li>

// First <li>
const firstLi = ul.firstElementChild;

// Last <li>
const lastLi = ul.lastElementChild;

console.log("First link:", firstLi.textContent);
console.log("Last link:", lastLi.textContent);