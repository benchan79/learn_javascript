# Arrays

## 1. What are arrays?
Arrays are JavaScript’s way of making lists. Arrays can store any data types (including strings, numbers, and booleans). Like lists, arrays are ordered, meaning each item has a numbered position.
```
let concepts = ['creating arrays', 'array structures', 'array manipulation'];
```

## 2. Create an Array
One way we can create an array is to use an array literal. An array literal creates an array by wrapping items in square brackets `[]`. Each content item inside an array is called an element. We can also save an array to a variable.
```
let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];
```

## 3. Accessing Elements
Each element in an array has a numbered position known as its *index*. We can access individual items using their index, which is similar to referencing an item in a list based on the item’s position.

Arrays in JavaScript are zero-indexed, meaning the positions start counting from `0` rather than `1`. Therefore, the first item in an array will be at position `0`.

We use bracket notation, `[]` with the index after the name of the array to access the element.

You can also access individual characters in a string using bracket notation and the index. 
```
const hello = 'Hello World';
console.log(hello[6]);
// Output: W
```

## 4. Update Elements
Once you have access to an element in an array, you can update its value.

The line, `seasons[3] = 'Autumn';` tells our program to change the item at index 3 of the `seasons` array to be `'Autumn'` instead of what is already there.
```
let seasons = ['Winter', 'Spring', 'Summer', 'Fall'];
 
seasons[3] = 'Autumn';
console.log(seasons); 
//Output: ['Winter', 'Spring', 'Summer', 'Autumn']
```

## 5. Arrays with `let` and `const`
Variables declared with `let` can be reassigned.

Variables declared with the `const` keyword cannot be reassigned. However, elements in an array declared with `const` remain mutable. Meaning that we can change the contents of a `const` array, but cannot reassign a new array or a different value.

## 6. The .length property
One of an array’s built-in properties is length and it returns the number of items in the array.

We use dot notation, chaining a period with the property name to the array, to access the length property of the array.
```
const newYearsResolutions = ['Keep a journal', 'Take a falconry class'];
 
console.log(newYearsResolutions.length);
// Output: 2
```

## 7. The `.push()` Method
`.push()` allows us to add items to the end of an array.

- We access the `push` method by using dot notation, connecting `push` to the array name with a period.
- Then we call it like a function. That’s because `.push()` is a function and one that JavaScript allows us to use right on an array.
- `.push()` can take a single argument or multiple arguments separated by commas.
- Notice that `.push()` changes, or mutates the array. You might also see `.push()` referred to as a destructive array method since it changes the initial array.
```
const itemTracker = ['item 0', 'item 1', 'item 2'];
 
itemTracker.push('item 3', 'item 4');
 
console.log(itemTracker); 
// Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];
```

## 8. The `.pop()` Method
Another array method, `.pop()`, removes the last item of an array.

- `.pop()` does not take any arguments, it simply removes the last element.
- `.pop()` returns the value of the last element.
- `.pop()` is a method that mutates the initial array.
```
const newItemTracker = ['item 0', 'item 1', 'item 2'];
 
const removed = newItemTracker.pop();
 
console.log(newItemTracker); 
// Output: [ 'item 0', 'item 1' ]
console.log(removed);
// Output: item 2
```

## 9. More Array Methods
`.pop() `and `.push()` mutate the array on which they’re called. However, there are times that we don’t want to mutate the original array and we can use non-mutating array methods.

Some arrays methods that are available to JavaScript developers include: `.join()`, `.slice()`, `.splice()`, `.shift()`, `.unshift()`, and `.concat()` amongst many others. Using these built-in methods make it easier to do some common tasks when working with arrays.

https://www.codecademy.com/resources/docs/javascript/arrays

- `.shift()`: Removes and returns the first element of the array. All subsequent elements will shift down one place
```
const daysOfWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const removed = daysOfWeek.shift();

console.log('Removed day:', removed);

console.log('Rest of week:', daysOfWeek);
```
- `.unshift()`: Adds one or more elements to beginning of array and returns new length.
```
const countToTen = [3, 4, 5, 6, 7, 8, 9, 10];
countToTen.unshift(1, 2);
console.log(countToTen);
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```
- `.slice()`: The `.slice()` array method returns a shallow copy of all or part of an array without modifying the original. The returned array contains the element specified by the first argument and all subsequent elements up to, but not including, the element specified by the second argument.
```
array.slice(start, end);
```
### Two Arguments
To create a subarray of `['Tuesday', 'Wednesday', 'Thursday']` from `weekDays` array:
```
const weekDays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const outOutOffice = weekDays.slice(1, 4);

console.log(outOutOffice);
// Output: ['Tuesday', 'Wednesday', 'Thursday']
```
### Negative Arguments
A negative index can be used, indicating an offset from the end of the sequence. For example:
```
const weekDays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const outOutOffice = weekDays.slice(-6, -3);

console.log(outOutOffice);
// Output: ['Tuesday', 'Wednesday', 'Thursday']
```
### One Argument
To create a subarray of the last two elements from `weekDays`:
```
const weekDays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const weekend = weekDays.slice(5);

console.log(weekend);
// Output: ['Saturday', 'Sunday']
```
### Zero Arguments
To create an identical subarray of `weekDays`:
```
const weekDays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const anotherWeek = weekDays.slice();

console.log(anotherWeek);
// Output: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
```

- `.indexOf()`: The `.indexOf()` method returns the first index at which an element can be found. Returns `-1` if the element is not found.
  - **Syntax**
```
array.indexOf(searchElement, startIndex);
```
  - searchElement: The element we are looking for.
  - startIndex: The index position to begin search from. Optional.

A negative startIndex will offset from the end of the array to begin search.

## 10. Arrays and Functions
When you pass an array into a function, if the array is mutated inside the function, that change will be maintained outside the function as well.
```
const flowers = ['peony', 'daffodil', 'marigold'];
 
function addFlower(arr) {
  arr.push('lily');
}
 
addFlower(flowers);
 
console.log(flowers); // Output: ['peony', 'daffodil', 'marigold', 'lily']
```
This is a pass-by-reference since what we’re actually passing to the function is a reference to where the variable memory is stored and changing the memory.

## 11. Nested Arrays
When an array contains another array it is known as a nested array. 
```
const nestedArr = [[1], [2, 3]];
```
To access the nested arrays we can use bracket notation with the index value, just like we did to access any other element.
```
const nestedArr = [[1], [2, 3]];
 
console.log(nestedArr[1]); // Output: [2, 3]
```
Then, if we wanted to access the elements within the nested array we can chain, or add on, more bracket notation with index values.
```
const nestedArr = [[1], [2, 3]];
 
console.log(nestedArr[1]); // Output: [2, 3]
console.log(nestedArr[1][0]); // Output: 2
```

## 12. Review Arrays
- Arrays are lists that store data in JavaScript.
- Arrays are created with brackets `[]`.
- Each item inside of an array is at a numbered position, or index, starting at `0`.
- We can access one item in an array using its index, with syntax like: `myArray[0]`.
- We can also change an item in an array using its index, with syntax like `myArray[0] = 'new string';`
- Arrays have a `length` property, which allows you to see how many items are in an array.
- Arrays have their own methods, including `.push()` and `.pop()`, which add and remove items from an array, respectively.
- Arrays have many methods that perform different tasks, such as `.slice()` and `.shift()`, you can find documentation at the [Mozilla Developer Network website](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).
- Some built-in methods are mutating, meaning the method will change the array, while others are not mutating. You can always check the documentation.
- Variables that contain arrays can be declared with `let` or `const`. Even when declared with `const`, arrays are still mutable. However, a variable declared with `const` cannot be reassigned.
- Arrays mutated inside of a function will keep that change even outside the function.
- Arrays can be nested inside other arrays.
- To access elements in nested arrays chain indices using bracket notation.

