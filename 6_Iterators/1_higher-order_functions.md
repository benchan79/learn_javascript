# Higher-Order Functions

## 1. Introduction
Higher-order functions are functions that accept other functions as arguments and/or return functions as output. This enables us to build abstractions on other abstractions. Using abstraction allows us to write more modular code, which is easier to read and debug. 

## 2. Functions as Data
JavaScript functions behave like any other data type in the language; we can assign functions to variables, and we can reassign them to new variables.

If we could look up the address in memory of the new variable and the address in memory of the original variable, they would point to the same place. Our new function can be invoked with parentheses as if that was the name we originally gave our function.
```
const announceThatIAmDoingImportantWork = () => {
    console.log("I’m doing very important work!");
};

const busy = announceThatIAmDoingImportantWork;
 
busy(); // This function call barely takes any space!
```
We assign `announceThatIAmDoingImportantWork` without parentheses as the value to the busy variable. We want to assign the value of the function itself, not the value it returns when invoked.

In JavaScript, functions are *first class objects*. This means that, like other objects you’ve encountered, JavaScript functions can have properties and methods.

Since functions are a type of object, they have properties such as .length and .name, and methods such as .toString(). You can see more about the methods and properties of functions in the [documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function).

Functions are special because we can invoke them, but we can still treat them like any other type of data.

## 3. Functions as Parameters
A *higher-order function* is a function that either accepts functions as parameters, returns a function, or both. We call functions that get passed in as parameters *callback functions*. Callback functions get invoked during the execution of the higher-order function.

When we invoke a higher-order function, and pass another function in as an argument, we don’t invoke the argument function. Invoking it would evaluate to passing in the return value of that function call. With callback functions, we pass in the function itself by typing the function name without the parentheses.
```
const higherOrderFunc = param => {
  param();
  return `I just invoked ${param.name} as a callback function!`
}
 
const anotherFunc = () => {
  return 'I\'m being invoked by the higher-order function!';
}
 
higherOrderFunc(anotherFunc);
```
In this example, we invoked higherOrderFunc() with an anonymous function (a function without a name) that counts to 10. Anonymous functions can be arguments too.
```
higherOrderFunc(() => {
  for (let i = 0; i <= 10; i++){
    console.log(i);
  }
});
```

## 4. Review
- Abstraction allows us to write complicated code in a way that’s easy to reuse, debug, and understand for human readers.
- We can work with functions the same way we work with any other type of data, including reassigning them to new variables.
- JavaScript functions are first-class objects, so they have properties and methods like any other object.
- Functions can be passed into other functions as parameters.
- A higher-order function is a function that either accepts functions as parameters, returns a function, or both.