// Step 1: Create the sentence
let sentence = "The movie is not that bad, I like it";

// Step 2: Find positions of "not" and "bad"
let wordNot = sentence.indexOf("not");
let wordBad = sentence.indexOf("bad");

console.log(wordNot); // position of "not"
console.log(wordBad); // position of "bad"

// Step 3: Check condition and replace
if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {
  let newSentence =
    sentence.slice(0, wordNot) +
    "good" +
    sentence.slice(wordBad + 3);

  console.log(newSentence);
} else {
  console.log(sentence);
}