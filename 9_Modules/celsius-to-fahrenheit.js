/* celsius-to-fahrenheit.js */

// function celsiusToFahrenheit(celsius) {
//   return celsius * (9 / 5) + 32;
// }

const { celsiusToFahrenheit } = require('./converters.js');

const celsiusInput = process.argv[2]; // Get the 3rd input from the argument list
const fahrenheitValue = celsiusToFahrenheit(celsiusInput);

console.log(
  `${celsiusInput} degrees Celsius = ${fahrenheitValue} degrees Fahrenheit`
);

/* 
$ node celsius-to-fahrenheit.js 100
100 degrees Celsius = 212 degrees Fahrenheit
*/
