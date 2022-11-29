/*
Mini Project to convert units of Temperature:
1) Kelvin to Celsius.
2) Celsius to Fahrenheit.
3) Fahrenheit to Newton.
*/

// Current temperature in Kelvin degrees
const kelvin = 0;
// Convert Kelvin to Celsius
const celsius = kelvin - 273;
// Convert Celsius to Fahrenheit
let fahrenheit = celsius * (9/5) + 32;
// Round down Fahrenheit
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
// Convert Celsius to Newton
let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);