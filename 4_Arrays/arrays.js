//======================================================================
// Arrays
// let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];
// console.log(newYearsResolutions);

//======================================================================
// Create an array
// const hobbies = ['running', 'coding', 'hiking'];
// console.log(hobbies);
//======================================================================
// Accessing Arrays
// const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];
// const listItem = famousSayings[0];
// console.log(listItem);
// console.log(famousSayings[2]);
// console.log(famousSayings[3]); // undefined
//======================================================================
// Update Elements
// let seasons = ['Winter', 'Spring', 'Summer', 'Fall'];
 
// seasons[3] = 'Autumn';
// console.log(seasons); 
// //Output: ['Winter', 'Spring', 'Summer', 'Autumn']

// let groceryList = ['bread', 'tomatoes', 'milk'];
// groceryList[1] = 'avocados';
// console.log(groceryList); 
//======================================================================
// Arrays with let and const
// let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];
// const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

// condiments[0] = 'Mayo';
// console.log(condiments);
// condiments = ['Mayo'];
// console.log(condiments);
// utensils[3] = 'Spoon';
// console.log(utensils);
//======================================================================
// The .length property
// const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];
// console.log(objectives.length);
//======================================================================
// The .push() Method
// const chores1 = ['wash dishes', 'do laundry', 'take out trash'];
// chores1.push('sweep the floor', 'mop the floor');
// console.log(chores1)
//======================================================================
//The .pop() Method
// const chores2 = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
// const removed = chores2.pop();
// console.log(chores2);
// console.log(removed);
//======================================================================
// More Array methods
// const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

// groceryList.shift();
// groceryList.unshift('popcorn');
// // console.log(groceryList);
// console.log(groceryList.slice(1, 4));
// const pastaIndex = groceryList.indexOf('pasta');
// console.log(pastaIndex);
//======================================================================
// Arrays and Functions
// const concept = ['arrays', 'can', 'be', 'mutated'];

// function changeArr(arr){
//   arr[3] = 'MUTATED';
// }

// changeArr(concept);
// console.log(concept);

// function removeElement(newArr) {
//   newArr.pop();
// }

// removeElement(concept);
// console.log(concept);
//======================================================================
// Nested Arrays
// numberClusters = [[1, 2], [3, 4], [5, 6]];
// const target = numberClusters[2][1];
//======================================================================
// Extra Practice

//Use the .length property to find the last element of an array.
// numList = [1, 2, 3];

// last_element = numList[numList.length - 1];
// console.log(last_element);
//======================================================================
// Take all the elements in an array and make a string.
// console.log(numList.toString()) // with comma

// console.log(numList.join("")) // without comma
//======================================================================
// Find the return value of calling .push() on an array.
// added_element = numList.push(4);

// console.log(added_element);
//======================================================================
// Self Practice
// const weekDays = [
//     'Monday',
//     'Tuesday',
//     'Wednesday',
//     'Thursday',
//     'Friday',
//     'Saturday',
//     'Sunday',
//   ];
  
// const outOutOffice = weekDays.slice(-1);
// console.log(outOutOffice);
//======================================================================