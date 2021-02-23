const getInput = require("./get-input.js");

const userAge = getInput();

if (userAge === '--help') {
    console.log('This function returns your mental age.');
    console.log('Please enter your age after "node mental-age.js" and a space')
}
const mentalAge = userAge / 2 + 3;
const ageNextAge = Number(userAge) + 1;
console.log('You are ' + userAge + ' years old.');
console.log("Next year you'll be " + ageNextYear + " years old.");

console.log('Your metal age is ' + mentalAge + ' years old.');