# Variables

## 1. Create a Variable: var
- Variable names cannot start with numbers.
- Variable names are case sensitive
- Variable names cannot be the same as keywords
```
var myName = 'Arya'
console.log(myName)
```
## 2. Create a Variable: let
The `let` keyword signals that the variable can be reassigned a different value. 

We can declare a variable without assigning the variable a value. In such a case, the variable will be automatically initialized with a value of `undefined`
```
let price;
console.log(price); // Output: undefined
price = 350;
console.log(price); // Output: 350
```
https://stackoverflow.com/questions/762011/what-is-the-difference-between-let-and-var

Difference between `var` and `let`.
Variables declared by `var` keyword are scoped to the immediate function body (hence the function scope) while `let` variables are scoped to the immediate enclosing block denoted by { } (hence the block scope).

## 3. Create a Variable: const
 A const variable cannot be reassigned because it is constant. If you try to reassign a const variable, you’ll get a TypeError.
 Constant variables must be assigned a value when declared. If you try to declare a const variable without a value, you’ll get a SyntaxError.
 `const myName = 'Gilberto';`

## 4. Mathematical Assignment Operators
```
let w = 4;
w += 1;
console.log(w); // Output: 5
```

## 5. The Increment and Decrement Operator
The increment operator will increase the value of the variable by 1. The decrement operator will decrease the value of the variable by 1.
```
let a = 10;
a++;
console.log(a); // Output: 11
```

## 6. String Concatenation with Variables
The + operator can be used to combine two string values even if those values are being stored in variables:
```
 let myPet = 'armadillo';
 console.log('I own a pet ' + myPet + '.')
 // Output: 'I own a pet armadillo.'
```

## 7. String Interpolation
We can insert, or interpolate, variables into strings using template literals. 
```
const myPet = 'armadillo';
console.log(`I own a pet ${myPet}.`);
// Output: I own a pet armadillo.
```
- a template literal is wrapped by backticks ` (this key is usually located on the top of your keyboard, left of the 1 key).
- Inside the template literal, you’ll see a placeholder, ${myPet}. The value of myPet is inserted into the template literal.

## 8. typeof operator
The typeof operator checks the value to its right and returns, or passes back, a **string** of the data type.
```
const unknown1 = 'foo';
console.log(typeof unknown1); // Output: string
 
const unknown2 = 10;
console.log(typeof unknown2); // Output: number
 
const unknown3 = true; 
console.log(typeof unknown3); // Output: boolean
```
