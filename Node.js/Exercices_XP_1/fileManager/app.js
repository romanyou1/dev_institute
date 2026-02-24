// app.js

const { readFile, writeFile } = require("./fileManager");

// Read Hello World.txt
readFile("Hello World.txt");

// Write to Bye World.txt
writeFile("Bye World.txt", "Writing to the file");