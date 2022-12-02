# Advanced Objects

## 1. Advanced Objects Introduction
Objects in JavaScript are containers that store data and functionality.

## 2. The `this` keyword
Objects are collections of related data and functionality. We store that functionality in methods on our objects.

In our `goat` object here we have a `.makeSound()` method. We can invoke the `.makeSound()` method on goat.
```
const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  }
};

goat.makeSound(); // Prints baaa
```
If we wanted to add a new method to our `goat` object called `.diet()` that prints the `goat`‘s `dietType`, it will return ReferenceError as `dietType` is not defined even though it's a property of `goat`. That’s because inside the scope of the `.diet()` method, we don’t automatically have access to other properties of the `goat` object.
```
const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet() {
    console.log(dietType);
  }
};
goat.diet(); 
// Output will be "ReferenceError: dietType is not defined"
```
We need to change the `.diet()` method to use the `this` keyword. The `this` keyword references the calling object which provides access to the calling object’s properties. In this example above, the calling object is `goat` and by using `this` we’re accessing the `goat` object itself, and then the `dietType` property of `goat` by using property dot notation.
```
const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet() {
    console.log(this.dietType);
  }
};
 
goat.diet(); 
// Output: herbivore
```

## 2. Arrow Function and `this`
 For a method, the calling object is the object the method belongs to. If we use the `this` keyword in a method then the value of `this` is the calling object. However, it becomes a bit more complicated when we start using arrow functions for methods.
```
const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet: () => {
    console.log(this.dietType);
  }
};
 
goat.diet(); // Prints undefined
```
Arrow functions inherently bind, or tie, an already defined `this` value to the function itself that is NOT the calling object. In the code snippet above, the value of `this` is the global object, or an object that exists in the global scope, which doesn’t have a `dietType` property and therefore returns `undefined`.

To read more about either arrow functions or the global object check out the MDN documentation of the [global object](https://developer.mozilla.org/en-US/docs/Glossary/Global`_`object) and [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow`_`functions).

The key takeaway from the example above is to avoid using arrow functions when using `this` in a method!

## 4. Privacy
Accessing and updating properties is fundamental in working with objects. However, there are cases in which we don’t want other code simply accessing and updating an object’s properties. When discussing privacy in objects, we define it as the idea that only certain properties should be mutable or able to change in value.

Certain languages have privacy built-in for objects, but JavaScript does not have this feature. Rather, JavaScript developers follow naming conventions that signal to other developers how to interact with a property. One common convention is to place an underscore `_` before the name of a property to mean that the property should not be altered. Here’s an example of using `_` to prepend a property.
```
const bankAccount = {
  _amount: 1000
}
```
In the example above, the _amount is not intended to be directly manipulated.

Even so, it is still possible to reassign _amount:
```
bankAccount._amount = 1000000;
```
Methods called getters and setters are used to respect the intention of properties prepended, or began, with `_`. Getters can return the value of internal properties and setters can safely reassign property values. 

## 5. Getters
Getters are methods that get and return the internal properties of an object.
```
const person = {
  _firstName: 'John',
  _lastName: 'Doe',
  get fullName() {
    if (this._firstName && this._lastName){
      return `${this._firstName} ${this._lastName}`;
    } else {
      return 'Missing a first name or a last name.';
    }
  }
}-
 
// To call the getter method: 
person.fullName; // 'John Doe'
```
- We use the `get` keyword followed by a function.
- We use an `if...else` conditional to check if both `_firstName` and `_lastName` exist (by making sure they both return truthy values) and then return a different value depending on the result.
- We can access the calling object’s internal properties using `this`. In `fullName`, we’re accessing both `this._firstName` and `this._lastName`.
- In the last line we call `fullName` on `person`. In general, getter methods do not need to be called with a set of parentheses. Syntactically, it looks like we’re accessing a property.

Advantages of using getter methods
- Getters can perform an action on the data when getting a property.
- Getters can return different values using conditionals.
- In a getter, we can access the properties of the calling object using `this`.
- The functionality of our code is easier for other developers to understand.

Another thing to keep in mind when using getter (and setter) methods is that properties cannot share the same name as the getter/setter function. If we do so, then calling the method will result in an infinite call stack error. One workaround is to add an underscore before the property name

## 6. Setters
Setter methods reassign values of existing properties within an object.
```
const person = {
  _age: 37,
  set age(newAge){
    if (typeof newAge === 'number'){
      this._age = newAge;
    } else {
      console.log('You must assign a number to age');
    }
  }
};
```
- We can perform a check for what value is being assigned to `this._age`.
- When we use the setter method, only values that are numbers will reassign `this._age`
- There are different outputs depending on what values are used to reassign `this._age`.
```
person.age = 40;
console.log(person._age); // Logs: 40
person.age = '40'; // Logs: You must assign a number to age
```
Setter methods like age do not need to be called with a set of parentheses. Syntactically, it looks like we’re reassigning the value of a property.

Like getter methods, there are similar advantages to using setter methods that include checking input, performing actions on properties, and displaying a clear intention for how the object is supposed to be used. Nonetheless, even with a setter method, it is still possible to directly reassign properties. For example, in the example above, we can still set `._age` directly:
```
person._age = 'forty-five'
console.log(person._age); // Prints forty-five
```

## 7. Factory Functions
A factory function is a function that returns an object and can be reused to make multiple object instances. Factory functions can also have parameters allowing us to customize the object that gets returned.
```
const monsterFactory = (name, age, energySource, catchPhrase) => {
  return { 
    name: name,
    age: age, 
    energySource: energySource,
    scare() {
      console.log(catchPhrase);
    } 
  }
};
```
In the `monsterFactory` function above, it has four parameters and returns an object that has the properties: `name`, `age`, `energySource`, and `scare()`. To make an object that represents a specific monster like a ghost, we can call `monsterFactory` with the necessary arguments and assign the return value to a variable:
```
const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
ghost.scare(); // 'BOO!'
```
Now we have a `ghost` object as a result of calling `monsterFactory()` with the needed arguments. With `monsterFactory` in place, we don’t have to create an object literal every time we need a new monster. Instead, we can invoke the `monsterFactory` function with the necessary arguments to make a monster.

## 5. Property Valye Shorthand
ES6 introduced some new shortcuts for assigning properties to variables known as *destructuring*.
```
const monsterFactory = (name, age) => {
  return { 
    name,
    age 
  }
};
```

## 9. Destructured Assignment
We often want to extract key-value pairs from objects and save them as variables. Take for example the following object:
```
const vampire = {
  name: 'Dracula',
  residence: 'Transylvania',
  preferences: {
    day: 'stay inside',
    night: 'satisfy appetite'
  }
};
```
If we wanted to extract the residence property as a variable, we could use the following code:
```
const residence = vampire.residence; 
console.log(residence); // Prints 'Transylvania' 
```
However, we can also take advantage of a destructuring technique called destructured assignment to save ourselves some keystrokes. In destructured assignment we create a variable with the name of an object’s key that is wrapped in curly braces { } and assign to it the object. Take a look at the example below:
```
const { residence } = vampire; 
console.log(residence); // Prints 'Transylvania'
```
Look back at the vampire object’s properties in the first code example. Then, in the example above, we declare a new variable residence that extracts the value of the residence property of vampire. When we log the value of residence to the console, 'Transylvania' is printed.

We can even use destructured assignment to grab nested properties of an object:
```
const { day } = vampire.preferences; 
console.log(day); // Prints 'stay inside'
```

## 10. Built-in Object Methods
 We’ve been creating instances of objects that have their own methods. But, we can also take advantage of built-in methods for Objects.

For example, we have access to object instance methods like: `.hasOwnProperty()`, `.valueOf()`, and many more. Practice your documentation reading skills and check out: [MDN’s object instance documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#Methods).

There are also useful Object class methods such as `Object.assign()`, `Object.entries()`, and `Object.keys()` just to name a few. For a comprehensive list, browse: [MDN’s object instance documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#Methods).

### Object.keys()
The `Object.keys()` method returns an array of a given object's own enumerable string-keyed property names.
```
const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.keys(object1));
// expected output: Array ["a", "b", "c"]
```
### Object.entries()
The `Object.entries()` method returns an array of a given object's own enumerable string-keyed property key-value pairs.
```
const object1 = {
  a: 'somestring',
  b: 42
};

for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}

// expected output:
// "a: somestring"
// "b: 42"
```
### Object.assign()
The `Object.assign()` method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.
```
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// expected output: true
```

## 11. Review
- The object that a method belongs to is called the calling object.
- The `this` keyword refers to the calling object and can be used to access properties of the calling object.
- Methods do not automatically have access to other internal properties of the calling object.
- The value of `this` depends on where the `this` is being accessed from.
- We cannot use arrow functions as methods if we want to access other internal properties.
- JavaScript objects do not have built-in privacy, rather there are conventions to follow to notify other developers about the intent of the code.
- The usage of an underscore before a property name means that the original developer did not intend for that property to be directly changed.
- Setters and getter methods allow for more detailed ways of accessing and assigning properties.
- Factory functions allow us to create object instances quickly and repeatedly.
- There are different ways to use object destructuring: one way is the property value shorthand and another is destructured assignment.
- As with any concept, it is a good skill to learn how to use the documentation with objects.

