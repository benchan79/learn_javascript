// Function Declartions
// function greetWorld() {
//     console.log('Hello, World!');
//   }
  
// greetWorld();
//======================================================================
// Calling a Function
// function sayThanks() {
//     console.log('Thank you for your purchase! We appreciate your business.');
//   }
  
//   sayThanks();
//======================================================================
// Parameters and Arguments
// function calculateArea(width, height) {
//     console.log(width * height);
// }

// calculateArea(10,6);

// function sayThanks(name) {
//     console.log('Thank you for your purchase ' + name + '! We appreciate your business.');
//   }
  
//   sayThanks('Cole')
//======================================================================
// Default Parameters
// function greeting (name = 'stranger') {
//     console.log(`Hello, ${name}!`)
//   }
   
//   greeting('Nick')
//   greeting() 

//   function makeShoppingList(item1='milk', item2='bread', item3='eggs'){
//     console.log(`Remember to buy ${item1}`);
//     console.log(`Remember to buy ${item2}`);
//     console.log(`Remember to buy ${item3}`);
//   }
//======================================================================
// Return
// function rectangleArea(width, height) {
//     if (width < 0 || height < 0) {
//       return 'You need positive integers to calculate area!';
//     }
//     return width * height;
//   }

// function monitorCount(rows, columns) {
//     return rows * columns;
// }
  
// const numOfMonitors = monitorCount(5, 4);

// console.log(numOfMonitors);
//======================================================================
// Helper Functions
// function multiplyByNineFifths(number) {
//     return number * (9/5);
//   };
   
//   function getFahrenheit(celsius) {
//     return multiplyByNineFifths(celsius) + 32;
//   };
   
//   getFahrenheit(15);

// function monitorCount(rows, columns) {
//     return rows * columns;
// };

// function costOfMonitors(rows, columns) {
//     return monitorCount(rows, columns) * 200;
// };

// const totalCost = costOfMonitors(5, 4);

// console.log(totalCost);
//======================================================================
// Function Expressions
// const calculateArea = function(width, height) {
//     const area = width * height;
//     return area;
// };

// calculateArea(5, 4);
// console.log(calculateArea(5, 4));

// const plantNeedsWater = function(day) {
//     if (day ==='Wednesday') {
//         return true;
//     } else {
//         return false;
//     }
// };

// plantNeedsWater('Tuesday');
// console.log(plantNeedsWater('Tuesday'));
//======================================================================
// Arrow Functons
// const rectangleArea = (width, height) => {
//     let area = width * height;
//     return area;
//   };

// const plantNeedsWater2 = (day) => {
//     if (day === 'Wednesday') {
//       return true;
//     } else {
//       return false;
//     }
//   };

//======================================================================
// Concise Body Arrow Functions
// const squareNum1 = (num) => {
//   return num * num;
// };

// const squareNum2 = num => num * num;

// const plantNeedsWater3 = (day) => {
//   return day === 'Wednesday' ? true : false;
// };

// const plantNeedsWater4 = day => day === 'Wednesday' ? true : false;
//======================================================================

alert('yo')

//======================================================================