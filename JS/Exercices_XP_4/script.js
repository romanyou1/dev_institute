// Self-invoking function (IIFE)
(function (username) {

  // Select the navbar
  const navbar = document.getElementById("navbar");

  // Create a div for the user info
  const userDiv = document.createElement("div");

  // Add content (name + profile picture)
  userDiv.innerHTML = `
    <img src="https://i.pravatar.cc/40" alt="profile" 
         style="border-radius: 50%; vertical-align: middle; margin-right: 10px;">
    <span>Welcome, ${username}!</span>
  `;

  // Style the div
  userDiv.style.float = "right";
  userDiv.style.fontSize = "18px";

  // Add div inside navbar
  navbar.appendChild(userDiv);

})("John");