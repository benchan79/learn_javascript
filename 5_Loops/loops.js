// The For Loop
// for (let i = 5; i < 11; i++) {
//     console.log(i);
//   };
//======================================================================
// Looping in Reverse
// for (let counter = 3; counter >= 0; counter--){
//     console.log(counter);
//   }
//======================================================================
// Looping through Arrays
// const vacationSpots = ['Bali', 'Paris', 'Tulum'];
// for (let i = 0; i < vacationSpots.length; i++) {
//   console.log(`I would love to visit ${vacationSpots[i]}`);
// }
//======================================================================
// Nested Loopsconst bobsFollowers = ['John', 'Peter', 'David', 'Roy'];
// const bobsFollowers = ['John', 'Peter', 'David', 'Roy'];

// const tinasFollowers = ['Sarah', 'Roy', 'Peter'];

// const mutualFollowers = [];

// for (let i = 0; i < bobsFollowers.length; i++) {
//   for (let j = 0; j < tinasFollowers.length; j++) {
//     if (bobsFollowers[i] === tinasFollowers[j]) {
//       mutualFollowers.push(tinasFollowers[j]);
//     }
//   }
// }

// console.log(mutualFollowers);
//======================================================================
// The while loop
// let counterTwo = 1;
// while (counterTwo < 4) {
//   console.log(counterTwo);
//   counterTwo++;
// }

// const cards = ['diamond', 'spade', 'heart', 'club'];
// let currentCard;
// while (currentCard !== 'spade') {
//   currentCard = cards[Math.floor(Math.random() * 4)];
//   console.log(currentCard);
// }
//======================================================================
// Do...While statements
let countString = '';
let i = 0;

do {
    countString = countString + i;
    i++;
} while (i < 5);

console.log(countString);

// add at least one cup of sugar to the batter 
// even if the value of cupsOfSugarNeeded is 0.
const cupsOfSugarNeeded = 3;
let cupsAdded = 0;

do {
  cupsAdded++;
  console.log(cupsAdded + ' cup was added');
} while (cupsAdded < cupsOfSugarNeeded);
//======================================================================
//The break Keyword
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below
for (let i = 0; i < rapperArray.length; i++) {
  console.log(rapperArray[i])
  if (rapperArray[i] === 'Notorious B.I.G.') {
    break;
  }
}

console.log("And if you don't know, now you know.")
//======================================================================
