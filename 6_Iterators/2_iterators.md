# Iterators

## 1. Intro to Iterators
The built-in JavaScript array methods that help us iterate are called iteration methods, at times referred to as iterators. Iterators are methods called on arrays to manipulate elements and return values.

Here are some of them:
- `.forEach()`
- `.map()`
- `.filter()`

```
const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
  return number * number;
});

console.log(squareNumbers);

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

console.log(onlyNumbers);
```

## 2. The `.forEach()` Method
<img src="img/iterator anatomy.svg">

- `groceries.forEach()` calls the `forEach` method on the `groceries` array.
- `.forEach()` takes an argument of callback function. Remember, a callback function is a function passed as an argument into another function.
- `.forEach()` loops through the array and executes the callback function for each element. During each execution, the current element is passed as an argument to the callback function.
- The return value for `.forEach()` will always be undefined.

Another way to pass a callback for .forEach() is to use arrow function syntax.
```
groceries.forEach(groceryItem => console.log(groceryItem));
```
We can also define a function beforehand to be used as the callback function.
```
function printGrocery(element){
  console.log(element);
}
 
groceries.forEach(printGrocery);
```

## 3. The `.map()` Method
When `.map()` is called on an array, it takes an argument of a callback function and returns a new array.
```
const numbers = [1, 2, 3, 4, 5]; 
 
const bigNumbers = numbers.map(number => {
  return number * 10;
});

console.log(numbers); // Output: [1, 2, 3, 4, 5]
console.log(bigNumbers); // Output: [10, 20, 30, 40, 50]
```
`.map()` works in a similar manner to `.forEach()`— the major difference is that `.map()` returns a new array.

- `numbers` is an array of numbers.
- `bigNumbers` will store the return value of calling `.map()` on `numbers`.
- `numbers.map` will iterate through each element in the `numbers` array and pass the element into the callback function.
- `return number * 10` is the code we wish to execute upon each element in the array. This will save each value from the `numbers` array, multiplied by `10`, to a new array.
- Notice that the elements in `numbers` were not altered and `bigNumbers` is a new array.

# 4. The `.filter()` Method
`.filter()` returns an array of elements after filtering out certain elements from the original array. The callback function for the `.filter() `method should return `true` or `false` depending on the element that is passed to it. The elements that cause the callback function to return `true` are added to the new array. 
```
const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 
 
const shortWords = words.filter(word => {
  return word.length < 6;
});

console.log(words); // Output: ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 
console.log(shortWords); // Output: ['chair', 'music', 'brick', 'pen', 'door']
```

- `words` is an array that contains string elements.
- `const shortWords =` declares a new variable that will store the returned array from invoking `.filter()`.
- The callback function is an arrow function that has a single parameter, `word`. Each element in the `words` array will be passed to this function as an argument.
- `word.length < 6;` is the condition in the callback function. Any `word` from the `words` array that has fewer than `6` characters will be added to the `shortWords` array.

## 5. The `.findIndex()` Method
Calling `.findIndex()` on an array will return the index of the first element that evaluates to `true` in the callback function.
```
const jumbledNums = [123, 25, 78, 5, 9]; 
 
const lessThanTen = jumbledNums.findIndex(num => {
  return num < 10;
});

console.log(lessThanTen); // Output: 3 
```
- `jumbledNums` is an array that contains elements that are numbers.
- `const lessThanTen =` declares a new variable that stores the returned index number from invoking `.findIndex()`.
- The callback function is an arrow function that has a single parameter, `num`. Each element in the `jumbledNums` array will be passed to this function as an argument.
- `num < 10;` is the condition that elements are checked against. `.findIndex()` will return the index of the first element which evaluates to `true` for that condition.
- If there isn’t a single element in the array that satisfies the condition in the callback, then `.findIndex()` will return `-1`.

## 6. The `.reduce()` Method
The `.reduce()` method returns a single value after iterating through the elements of an array, thereby *reducing* the array. 
```
const numbers = [1, 2, 4, 10];
 
const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
})
 
console.log(summedNums) // Output: 17
```
|Iteration|`accumulator`|`currentValue`|return value
|----|----|---|---|
|First|1|2|3|
|Second|3|4|7|
|Third|7|10|17|

- `numbers` is an array that contains numbers.
- `summedNums` is a variable that stores the returned value of invoking `.reduce()` on `numbers`.
- `numbers.reduce()` calls the `.reduce()` method on the `numbers` array and takes in a callback function as argument.
- The callback function has two parameters, `accumulator` and `currentValue`. The value of `accumulator` starts off as the value of the first element in the array and the `currentValue` starts as the second element. To see the value of `accumulator` and `currentValue` change, review the chart above.
- As `.reduce()` iterates through the array, the return value of the callback function becomes the `accumulator` value for the next iteration, `currentValue` takes on the value of the current element in the looping process.

The `.reduce()` method can also take an optional second parameter to set an initial value for `accumulator` (the first argument is the callback function).
```
const numbers = [1, 2, 4, 10];
 
const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 100)  // <- Second argument for .reduce()
 
console.log(summedNums); // Output: 117
```
|Iteration|`accumulator`|`currentValue`|return value
|----|----|---|---|
|First|100|1|101|
|Second|101|2|103|
|Third|103|4|107|
|Fourth|107|10|117|

## 7. Iterator Documentation
There are many additional built-in array methods, a complete list of which is on the [MDN’s Array iteration methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Iteration_methods) page.

The documentation for each method contains several sections:

- A short definition.
- A block with the correct syntax for using the method.
- A list of parameters the method accepts or requires.
- The return value of the function.
- An extended description.
- Examples of the method’s use.
- Other additional information.

### `.some()`
The `some()` method tests whether at least one element in the array passes the test implemented by the provided function. It returns `true` if, in the array, it finds an element for which the provided function returns `true`; otherwise it returns `false`. It doesn't modify the array.
```
const array = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// expected output: true
```

### `.every()`
The `every()` method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
```
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// expected output: true
```

## 8. Choose the Right Iterator
There are many iteration methods you can choose. In addition to learning the correct syntax for the use of iteration methods, it is also important to learn how to choose the correct method for different scenarios. 
```
const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

cities.forEach(city => console.log('Have you visited ' + city + '?'));

const longCities = cities.filter(city => city.length > 7);

const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

const smallerNums = nums.map(num => num - 5);

nums.some(num => num < 0);
```

## 9. Review
- `.forEach()` is used to execute the same code on every element in an array but does not - change the array and returns undefined.
- `.map()` executes the same code on every element in an array and returns a new array with the updated elements.
- `.filter()` checks every element in an array to see if it meets certain criteria and returns a new array with the elements that return truthy for the criteria.
- `.findIndex()` returns the index of the first element of an array that satisfies a condition in the callback function. It returns `-1` if none of the elements in the array satisfies the condition.
- `.reduce()` iterates through an array and takes the values of the elements and returns a - single value.
- All iterator methods take a callback function, which can be a pre-defined function, a function expression, or an arrow function.
- You can visit the [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) to learn more about iterator methods (and all other parts of JavaScript!).

