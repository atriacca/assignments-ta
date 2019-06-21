var ask = require('readline-sync');

console.log('Hello! My name is Hal. Help me get to know you!\n');
var firstName = ask.question('What is your first name? ');
console.log(`Hello ${firstName}, it's a pleasure to meet you!`)
var lastName = ask.question('May I get your last name too, please? ');
console.log(`Great! Thanks, ${firstName}.`)
var age = ask.question(`Great! Thanks, ${firstName}. How old are you?`)
console.log(`Thanks again, ${age} year old ${firstName} ${lastName}.`)
var raised = ask.question(`Where were you raised?`)
var raisedCaps = raised.toUpperCase();
console.log(`${raisedCaps}!! I have a good friend who hails from ${raised}!`)