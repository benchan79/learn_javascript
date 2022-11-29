# Conditional Statements

## 1. What are Conditional Statements?
 A conditional statement checks a specific condition(s) and performs a task based on the condition(s).

## 2. If statement
 ```
if (true) {
  console.log('This message will print!'); 
}
// Prints: This message will print!
 ```
- The `if` keyword followed by a set of parentheses `()` which is followed by a *code block*, or *block statement*, indicated by a set of curly braces `{}`.
- Inside the parentheses `()`, a condition is provided that evaluates to `true` or `false`.
- If the condition evaluates to `true`, the code inside the curly braces `{}` runs, or *executes*.
- If the condition evaluates to `false`, the block won’t execute.

## 3 If...Else Statements
If we wanted to add some default behavior to the `if` statement, we can add an `else` statement to run a block of code when the condition evaluates to `false`.
```
if (false) {
  console.log('The code in this block will not run.');
} else {
  console.log('But the code in this block will!');
}
 
// Prints: But the code in this block will!
```
An `else` statement must be paired with an `if` statement, and together they are referred to as an `if...else` statement.

In the example above, the `else` statement:

- Uses the `else` keyword following the code block of an `if` statement.
- Has a code block that is wrapped by a set of curly braces `{}`.
- The code inside the `else` statement code block will execute when the `if` statement’s condition evaluates to `false`.

`if...else` statements allow us to automate solutions to yes-or-no questions, also known as *binary decisions*.

## 4. Comparison Operators
Comparison operators compare the value on the left with the value on the right.

- Less than: `<`
- Greater than: `>`
- Less than or equal to: `<=`
- Greater than or equal to: `>=`
- Is equal to: `===`
- Is not equal to: `!==`

All comparison statements evaluate to either true or false and are made up of:

- Two values that will be compared.
- An operator that separates the values and compares them accordingly

## 5. Logical Operators
Logical operators are often used in conditional statements to add another layer of logic to our code.
- the and operator (`&&`)
- the or operator (`||`)
- the not operator, otherwise known as the bang operator (`!`)
```
// && operator checks if two things are true
if (stopLight === 'green' && pedestrians === 0) {
  console.log('Go!');
} else {
  console.log('Stop');
}
```
```
// || operator checks if either condition is true
if (day === 'Saturday' || day === 'Sunday') {
  console.log('Enjoy the weekend!');
} else {
  console.log('Do some work.');
}
```
```
// ! not operator reverses, or negates, the value of a boolean
let excited = true;
console.log(!excited); // Prints false
 
let sleepy = false;
console.log(!sleepy); // Prints true
```

## 6. Truthy and Falsy
Even though the value of a variable is not explicitly the value `true`, when used in a boolean or conditional context, it evaluates to `true` because it has been assigned a non-falsy value, or a *truthy* value.

The list of falsy values includes:
- 0
- Empty strings like "" or ''
- null which represent when there is no value at all
- undefined which represent when a declared variable lacks a - value
- NaN, or Not a Number
```
// Truthy
let myVariable = 'I Exist!';
 
if (myVariable) {
   console.log(myVariable)
} else {
   console.log('The variable does not exist.')
}
// Prints 'I Exist!'
```
```
// Falsy
let numberOfApples = 0;
 
if (numberOfApples){
   console.log('Let us eat apples!');
} else {
   console.log('No apples left!');
}
 
// Prints 'No apples left!'
```

## 7. Truthy and Falsy Assignment

```
let username = '';
let defaultName;
 
if (username) {
  defaultName = username;
} else {
  defaultName = 'Stranger';
}
 
console.log(defaultName); // Prints: Stranger
```

Because `||` or statements check the left-hand condition first, the variable `defaultName` will be assigned the actual value of `username` if it is truthy, and it will be assigned the value of `'Stranger'` if `username` is falsy. This concept is also referred to as **short-circuit evaluation**.
```
let username = '';
let defaultName = username || 'Stranger';
 
console.log(defaultName); // Prints: Stranger
```

## 8. Tenary Operator
Using short-hand syntax, we can use a ternary operator to simplify an `if...else` statement.
```
isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');
```
- The condition, `isNightTime`, is provided before the `?`.
- Two expressions follow the `?` and are separated by a colon `:`.
- If the condition evaluates to `true`, the first expression executes.
- If the condition evaluates to `false`, the second expression executes.

## 9. `Else If` Statements
The `else if` statement allows for multiple possible outcomes.

The `else if` statement always comes after the `if` statement and before the `else` statement. The `else if` statement also takes a condition. 

`if`/`else if`/`else` statements are read from top to bottom, so the code inside the first else if statement is executed. The rest of the conditions are not evaluated. If none of the conditions evaluated to true, then the code in the else statement would have executed.

```
let stopLight = 'yellow';
 
if (stopLight === 'red') {
  console.log('Stop!');
} else if (stopLight === 'yellow') {
  console.log('Slow down.');
} else if (stopLight === 'green') {
  console.log('Go!');
} else {
  console.log('Caution, unknown!');
}
```

### 10 The switch keyword
- A `switch` statement provides an alternative syntax that is easier to read and write.
- The `switch` keyword initiates the statement and is followed by `( ... )`, which contains the value that each `case` will compare.
- Inside the block, `{ ... }`, there are multiple `case`s. The `case` keyword checks if the expression matches the specified value that comes after it. If the value is the same, that `case`‘s action would run.
- The `break` keyword tells the computer to exit the block and not execute any more code or check any other cases inside the code block. Note: Without `break` keywords, the first matching `case` will run, but so will every subsequent `case` regardless of whether or not it matches—including the `default`. This behavior is different from `if`/`else` conditional statements that execute only one block of code.
- At the end of each `switch` statement, there is a `default` statement. If none of the `case`s are true, then the code in the `default` statement will run.
```
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
 
// Prints 'Papayas are $1.29'
```