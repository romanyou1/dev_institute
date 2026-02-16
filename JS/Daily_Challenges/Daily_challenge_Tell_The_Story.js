const form = document.getElementById("libform");
const storySpan = document.getElementById("story");

const nounInput = document.getElementById("noun");
const adjectiveInput = document.getElementById("adjective");
const personInput = document.getElementById("person");
const verbInput = document.getElementById("verb");
const placeInput = document.getElementById("place");

const shuffleBtn = document.getElementById("shuffle-button");

// We'll store the latest valid values here so shuffle keeps them
let lastValues = null;

// At least 3 stories (we'll do 5)
function buildStories({ noun, adjective, person, verb, place }) {
  return [
    `One day, ${person} brought a ${adjective} ${noun} to ${place} and started to ${verb} like nobody was watching.`,
    `In ${place}, a ${adjective} ${noun} challenged ${person} to ${verb}. Spoiler: ${person} won (barely).`,
    `${person} heard a rumor that the ${adjective} ${noun} in ${place} could ${verb} on command… and it was true.`,
    `Every time ${person} visits ${place}, the ${adjective} ${noun} appears and tries to ${verb}. It’s tradition now.`,
    `Breaking news from ${place}: a ${adjective} ${noun} was seen trying to ${verb}, while ${person} laughed uncontrollably.`,
  ];
}

function getValues() {
  return {
    noun: nounInput.value.trim(),
    adjective: adjectiveInput.value.trim(),
    person: personInput.value.trim(),
    verb: verbInput.value.trim(),
    place: placeInput.value.trim(),
  };
}

function valuesAreValid(values) {
  return Object.values(values).every((v) => v !== "");
}

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateAndDisplayStory(values) {
  const stories = buildStories(values);
    storySpan.textContent = randomItem(stories);
}

// Form submit: get values, validate, create story
form.addEventListener("submit", function (event) {
  event.preventDefault(); // prevents page refresh so we can update the DOM

    const values = getValues();
    console.log("Submitted values:", values);

    if (!valuesAreValid(values)) {
      console.error("Some inputs are empty:", values);
      alert("Please fill in all fields before generating the story.");
      return;
    }

    lastValues = values;
    generateAndDisplayStory(values);
});

// BONUS: Shuffle story without changing the input values
shuffleBtn.addEventListener("click", function () {
  if (!lastValues) {
    alert("First click “Lib it!” to generate a story, then you can shuffle.");
    return;
  }
  generateAndDisplayStory(lastValues);
});