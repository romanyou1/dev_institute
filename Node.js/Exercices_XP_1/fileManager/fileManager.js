// exercice 3

const fs = require("fs");

// Function to read a file
function readFile(filePath) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }
    console.log("File Content:");
    console.log(data);
  });
}

// Function to write to a file
function writeFile(filePath, content) {
  fs.writeFile(filePath, content, "utf8", (err) => {
    if (err) {
      console.error("Error writing file:", err);
      return;
    }
    console.log("File written successfully!");
  });
}

module.exports = { readFile, writeFile };

// Go to Hello_World.txt, Bye_World.txt, app.js