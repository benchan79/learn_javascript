// If statement
// if (true) {
//     console.log('This message will print!'); 
//   }
//============================================================
// Prints: This message will print!
// let sale = true;
// sale = false
// if (sale) {
//   console.log('Time to buy!')
// }
//============================================================
// If...Else Statements
// sale = false;
// if (sale) {
//   console.log('Time to buy!');
// } else {
//   console.log('Time to wait for a sale.')
// }
//============================================================
// Comparison Operators
// let hungerLevel = 7;
// if (hungerLevel > 7) {
//   console.log('Time to eat!')
// } else {
//   console.log('We can eat later!')
// }
//============================================================
// Logical Operators
// let mood = 'sleepy';
// let tirednessLevel = 6;

// if (mood === 'sleepy' && tirednessLevel > 8) {
//   console.log('time to sleep')
// } else {
//   console.log('not bed time yet')
// }
//============================================================
// Truthy and Falsy
// let myVariable = 'I Exist!';
 
// if (myVariable) {
//    console.log(myVariable)
// } else {
//    console.log('The variable does not exist.')
// }

// let numberOfApples = 0;
 
// if (numberOfApples){
//    console.log('Let us eat apples!');
// } else {
//    console.log('No apples left!');
// }

// let wordCount = 42;

// if (wordCount) {
//   console.log("Great! You've started your work!");
// } else {
//   console.log('Better get to work!');
// }

// let favoritePhrase = '';

// if (favoritePhrase) {
//   console.log("This string doesn't seem to be empty.");
// } else {
//   console.log('This string is definitely empty.');
// }
//============================================================
// Truthy and Falsy Assignment
// let username = '';
// let defaultName;
 
// if (username) {
//   defaultName = username;
// } else {
//   defaultName = 'Stranger';
// }
 
// console.log(defaultName); // Prints: Stranger

// let username1 = 'john';
// let defaultName1 = username1 || 'Stranger';
 
// console.log(defaultName1); // Prints: Stranger

// let tool = 'marker';

// // Use short circuit evaluation to assign  writingUtensil variable below:
// let writingUtensil = tool || 'pen'

// console.log(`The ${writingUtensil} is mightier than the sword.`);
//============================================================
// Tenary Operator
// let isNightTime = true;
//  isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');

// let isLocked = false;
// isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

// let isCorrect = true;
// isCorrect ? console.log('Correct!') : console.log('Incorrect!');

// let favoritePhrase = 'Love That!';
// favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");
//============================================================
// Else If Statements
// let stopLight = '';

// if (stopLight === 'red') {
//     console.log('Stop!');
// } else if (stopLight === 'yellow') {
//     console.log('Slow down.')
// } else if (stopLight === 'green') {
//     console.log('Go!')
// } else {
//     console.log('Caution, unknown!');
// }

// let season = 'summer';

// if (season === 'spring') {
//   console.log('It\'s spring! The trees are budding!');
// } else if (season === 'winter') {
//   console.log('It\'s winter! Everything is covered in snow.')
// } else if (season === 'fall') {
//     console.log('It\'s fall! Leaves are falling!')
// } else if (season === 'summer') {
//   console.log('It\'s sunny and warm because it\'s summer!')
// } else {
//   console.log('Invalid season.');
// }
//============================================================
// The switch keyword
let groceryItem = 'papaya';
 
switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
}
 
// Prints 'Papayas are $1.29

let athleteFinalPosition = 'fourth place';

switch (athleteFinalPosition) {
    case 'first place':
      console.log('You get the gold medal!');
      break;
    case 'second place':
      console.log('You get the silver medal!');
      break;
    case 'third place':
      console.log('You get the bronze medal!');
      break;
    default:
      console.log('No medal awarded.');
      break;
  }
  //============================================================
  