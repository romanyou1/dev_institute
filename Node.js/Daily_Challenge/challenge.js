// Step 8

const greet = require('./greeting');
const showColorfulMessage = require('./colorful-message');
const readFileContent = require('./read-file');

console.log('=== DAILY CHALLENGE START ===\n');

console.log(greet('Roman'));
console.log('');

showColorfulMessage();
console.log('');

readFileContent();

console.log('\n=== DAILY CHALLENGE END ===');