# Introduction to Javascript

## 1. Console
In JavaScript, the `console` keyword refers to an object, a collection of data and actions, that we can use in our code.

Keywords are words that are built into the JavaScript language, so the computer recognizes them and treats them specially.

One action, or method, that is built into the `console` object is the `.log()` method. 

When we write `console.log()` what we put inside the parentheses will get printed, or logged, to the console.

`console.log(42)`

## 2. Comments
As we write JavaScript, we can write comments in our code that the computer will ignore as our program runs. 

Comments can explain what the code is doing, leave instructions for developers using the code, or add any other useful annotations.

1. Single line comment `//`
```
// Prints 5 to the console
console.log(5);
```
2. Multiline comment `/* .... */`
```
/*
This is all commented 
console.log(10);
None of this is going to run!
console.log(99);
*/
```
You can also use this syntax to comment something out in the middle of a line of code:
```
console.log(/*IGNORED!*/ 5);  // Still just prints 5 
```

## 3. Data Types
Data types are the classifications we give to the different kinds of data that we use in programming. In JavaScript, there are seven fundamental data types:
1. Number: Any number, including numbers with decimals
2. String: `"my_string"`, `'your_string'`
3. Boolean: `true`, `false`
4. Null: This data type represents the intentional absence of a value. `let x = null`  
5. Undefined: `undefined` means that a given value does not exist.
6. Symbol: unique identifiers
7. Object: collections of related data

## 4. Aritmetic Operators
1. Add: `+`
2. Subtract: `-`
3. Multiply: `*`
4. Divide: `/`
5. Remainder: `%`
```
console.log(3 + 4); // Prints 7
console.log(5 - 1); // Prints 4
console.log(4 * 2); // Prints 8
console.log(9 / 3); // Prints 3
```

## 5. String Concatenation
It is the process of appending one string to another.

When a `+` operator is used on two strings, it appends the right string to the left string:
```
console.log('hi' + 'ya'); // Prints 'hiya'
console.log('wo' + 'ah'); // Prints 'woah'
console.log('I love to ' + 'code.')
// Prints 'I love to code.'
```
Just like with regular math, we can combine, or chain, our operations to get a final result:
```
console.log('One' + ', ' + 'two' + ', ' + 'three!'); 
// Prints 'One, two, three!'
```

## 6. Properties
When you introduce a new piece of data into a JavaScript program,  it is saved as an instance of the data type. 

All data types have access to specific properties that are passed down to each instance.

For example, every string instance has a property called `length` that stores the number of characters in that string.

You can retrieve property information by appending the string with a period and the property name:
```
console.log('Hello'.length); // Prints 5
```

## 7. Methods
Methods are actions we can perform.

Data types have access to specific methods that allow us to handle instances of that data type.

Methods are called by appending an instance with:
1. a period (the dot operator)
2. the name of the method
3. opening and closing parentheses
```
console.log('hello'.toUpperCase()); // Prints 'HELLO'
console.log('Hey'.startsWith('H')); // Prints true
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

## 8. Built-in Objects
In addition to console, there are other objects built into JavaScript. You can also build your own objects.

The great thing about objects is that they have methods.

```
console.log(Math.random()); // Prints a random number between 0  1
console.log(Math.floor(Math.random() * 50));// Prints a random whole number (after rounding down) between 0 and 50
console.log(Math.ceil(43.8))
console.log(Number.isInteger(2017))
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

https://www.codecademy.com/resources/docs/javascript