// Daily Challenge 2

const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`;


// 1️⃣ Convert JSON string to JS object
function toJs() {
  return new Promise((resolve, reject) => {
    const morseJS = JSON.parse(morse);

    if (Object.keys(morseJS).length === 0) {
      reject("Error: Morse object is empty");
    } else {
      resolve(morseJS);
    }
  });
}


// 2️⃣ Convert word to Morse
function toMorse(morseJS) {
  return new Promise((resolve, reject) => {
    const userInput = prompt("Enter a word or sentence:");
    
    const lowerInput = userInput.toLowerCase();
    const translation = [];

    for (let char of lowerInput) {
      if (char === " ") {
        translation.push("\n"); // line break for spaces
      } else if (!morseJS[char]) {
        reject(`Error: Character "${char}" does not exist in Morse dictionary`);
        return;
      } else {
        translation.push(morseJS[char]);
      }
    }

    resolve(translation);
  });
}


// 3️⃣ Join and display on DOM
function joinWords(morseTranslation) {
  const output = morseTranslation.join("\n");
  document.body.innerText = output;
}


// 🔗 Chain the functions
toJs()
  .then(morseJS => toMorse(morseJS))
  .then(morseTranslation => joinWords(morseTranslation))
  .catch(error => console.log(error));