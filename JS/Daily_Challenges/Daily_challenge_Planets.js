// 1) Array of planets (as objects so we can include moons)
const planets = [
  { name: "Mercury", color: "gray", moons: 0 },
  { name: "Venus", color: "orange", moons: 0 },
  { name: "Earth", color: "blue", moons: 1 },
  { name: "Mars", color: "red", moons: 2 },
  { name: "Jupiter", color: "brown", moons: 79 },
  { name: "Saturn", color: "gold", moons: 83 },
  { name: "Uranus", color: "lightblue", moons: 27 },
  { name: "Neptune", color: "purple", moons: 14 }
];

// 2) Select the section where planets will be added
const section = document.querySelector(".listPlanets");

// 3) Loop through planets and create divs
planets.forEach((planet) => {

  // Create planet div
  const planetDiv = document.createElement("div");
  planetDiv.classList.add("planet");

  // Set background color
  planetDiv.style.backgroundColor = planet.color;

  // Add planet name inside
  planetDiv.textContent = planet.name;

  // ---- Bonus: Add moons ----
  for (let i = 0; i < planet.moons; i++) {
    const moonDiv = document.createElement("div");
    moonDiv.classList.add("moon");

    // Random positioning around the planet
    moonDiv.style.top = Math.random() * 80 + "px";
    moonDiv.style.left = Math.random() * 80 + "px";

    // Append moon to planet
    planetDiv.appendChild(moonDiv);

    // ⚠️ Limit moons visually (otherwise Jupiter will crash the screen)
    if (i > 4) break;
  }

  // Append planet to section
  section.appendChild(planetDiv);
});