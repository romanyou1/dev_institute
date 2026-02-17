// Exercice 1 (See Exercices_XP_7A.html)


// Exercice 2 (See Exercices_XP_7B.html)


// Exercice 3
const marioGame = {
  detail : "An amazing game!",
  characters : {
    mario : {
      description:"Small and jumpy. Likes princesses.",
      height: 10,
      weight: 3,
      speed: 12,
    },
    bowser : {
      description: "Big and green, Hates princesses.",
      height: 16,
      weight: 6,
      speed: 4,
    },
    princessPeach : {
      description: "Beautiful princess.",
      height: 12,
      weight: 2,
      speed: 2,
    }
  },
};

// Add a breakpoint
debugger;

// Convert to JSON
const prettyJsonGame = JSON.stringify(marioGame, null, 2);

// Print result
console.log(prettyJsonGame);

// See Exercices_XP_7A.json