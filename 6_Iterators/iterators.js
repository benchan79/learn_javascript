// Intro to iterators
// const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

// artists.forEach(artist => {
//   console.log(artist + ' is one of my favorite artists.');
// });

// const numbers = [1, 2, 3, 4, 5];

// const squareNumbers = numbers.map(number => {
//   return number * number;
// });

// console.log(squareNumbers);

// const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

// const onlyNumbers = things.filter(thing => {
//   return typeof thing === 'number';
// });

// console.log(onlyNumbers);
//====================================================================
// The .forEach() Method
// const groceries = ['brown sugar', 'salt', 'cranberries', 'walnuts'];

// Method 1: Define callback function as parameter inside forEach() method
// console.log('=========== Method 1 ===========')
// groceries.forEach(function(groceryItem) {
//     console.log(groceryItem);
// });

// Method 2: Arrow notation
// console.log('=========== Method 2 ===========')
// groceries.forEach(groceryItem => console.log(groceryItem));

// Method 3: Define callback function beforehand
// function printGrocery(element){
//     console.log(element);
// };
// console.log('=========== Method 3 ===========')
// const printGrocery = element => console.log(element);

// groceries.forEach(printGrocery);

// const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// fruits.forEach(fruit => console.log(`I want to eat a ${fruit}`))

//====================================================================
// The .map() Method
// const numbers = [1, 2, 3, 4, 5];

// const bigNumbers = numbers.map(number => {
//     return number * 10;
// })

// console.log(numbers);
// console.log(bigNumbers);

// const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
// const secretMessage = animals.map(animal => animal[0]);
// console.log(secretMessage.join(''));

// const bigNumbers = [100, 200, 300, 400, 500];
// const smallNumbers = bigNumbers.map(number => number / 100);
// console.log(smallNumbers);
//====================================================================
// The .filter() Method
// const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 
 
// const shortWords = words.filter(word => {
//   return word.length < 6;
// });

// console.log(words); // Output: ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 
// console.log(shortWords); // Output: ['chair', 'music', 'brick', 'pen', 'door']

// Method 1
// const numbers = [10, 20, 30, 40, 50];
 
// const filteredNums = numbers.filter(function(number){
//   if (number < 25) {
//     return true;
//   }
// })

// Method 2
// const filteredNums = numbers.filter(function(number){
//     return number < 25;
//    })
 
// Method 3
// const filteredNums = numbers.filter(number => number < 25);
// console.log(smallNumbers);

// const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
// const longFavoriteWords = favoriteWords.filter(word => word.length > 7);
// console.log(longFavoriteWords);

//====================================================================
// The .findIndex() Method
// const jumbledNums = [123, 25, 78, 5, 9]; 
 
// const lessThanTen = jumbledNums.findIndex(num => {
//   return num < 10;
// });

// console.log(lessThanTen); // Output: 3 
// console.log(jumbledNums[3]); // Output: 5

// const greaterThan1000 = jumbledNums.findIndex(num => {
//     return num > 1000;
// });
   
// console.log(greaterThan1000); // Output: -1

// const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

// const foundAnimal = animals.findIndex(animal => animal === 'elephant');

// const startsWithS = animals.findIndex(animal => animal[0] === 's');

// console.log(foundAnimal);
// console.log(animals[foundAnimal]);
// console.log(startsWithS);
// console.log(animals[startsWithS]);
//====================================================================
// The .reduce() method
// const numbers = [1, 2, 4, 10];
 
// const summedNums = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue
// })
 
// console.log(summedNums) // Output: 17

// const numbers1 = [1, 2, 4, 10];
 
// const summedNums1 = numbers1.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue
// }, 100)  // <- Second argument for .reduce()
 
// console.log(summedNums1); // Output: 117

// const newNumbers = [1, 3, 5, 7];

// const newSum = newNumbers.reduce((accumulator, currentValue) => {
//   console.log('The value of accumulator: ', accumulator);
//   console.log('The value of currentValue: ', currentValue);
//   return accumulator + currentValue;
// }, 10);

// console.log(newSum);
//====================================================================
// Iterator Documentation

// const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];
// check if there are words that are fewer than 6 characters long
// console.log(words.some((word) => {
//   return word.length < 6;
// }));

// save any words longer than 5 characters 
// const interestingWords = words.filter(word => word.length > 5);
// console.log(interestingWords);

// check if every element has more than 5 characters.
// console.log(interestingWords.every((word) => { return word.length > 5} ));

//====================================================================
// Choose the right iterator
const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

cities.forEach(city => console.log('Have you visited ' + city + '?'));

const longCities = cities.filter(city => city.length > 7);
console.log(longCities);

const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

const smallerNums = nums.map(num => num - 5);
console.log(smallerNums);

anyNegative = nums.some(num => num < 0);
console.log(anyNegative);
//====================================================================