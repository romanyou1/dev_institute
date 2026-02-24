// Exercice 7

const fs = require("fs");

const sourceFile = "source.txt";
const destinationFile = "destination.txt";

fs.readFile(sourceFile, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading source file:", err);
    return;
  }

  fs.writeFile(destinationFile, data, "utf8", (err) => {
    if (err) {
      console.error("Error writing destination file:", err);
      return;
    }

    console.log("File copied successfully!");
  });
});

// Go to read-directory.js