// Introduction
// const robot = {
//     model: 'B-4MI',
//     mobile: true,
//     greeting() {
//         console.log(`I'm model ${this.model}, how may I be of service?`);
//     }
// }
  
// const massProdRobot = (model, mobile) => {
//     return {
//       model,
//       mobile,
//       greeting() {
//         console.log(`I'm model ${this.model}, how may I be of service?`);
//       }
//     }
// }
  
// const shinyNewRobot = massProdRobot('TrayHax', true)
  
// const chargingStation = {
//     _name: 'Electrons-R-Us',
//     _robotCapacity: 120,
//     _active: true,
//     _chargingRooms: ['Low N Slow', 'Middle of the Road', 'In and Output'],
  
//     set robotCapacity(newCapacity) {
//       if (typeof newCapacity === 'number') {
//         this._robotCapacity = newCapacity;
//       } else {
//         console.log(`Change ${newCapacity} to a number.`)
//       }
//     },
//     get robotCapacity() {
//       return this._robotCapacity;
//     }
// }
//==========================================================================
// The `this` keyword
// const goat = {
//     dietType: 'herbivore',
//     makeSound() {
//       console.log('baaa');
//     },
//     diet() {
//     //   console.log(dietType);
//     console.log(this.dietType);
//     }
//   };
// goat.makeSound();
// goat.diet(); 

// const robot = {
//     model: '1E78V2',
//     energyLevel: 100,
//     provideInfo() {
//       return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
//     }
//   };
  
//   console.log(robot.provideInfo())
//==========================================================================
// Arrow functions and `this`
// const goat = {
//     dietType: 'herbivore',
//     makeSound() {
//       console.log('baaa');
//     },
//     diet: () => {
//       console.log(this.dietType);
//     }
//   };
//   goat.makeSound(); 
//   goat.diet(); // Prints undefined

// const robot = {
//     energyLevel: 100,
//     checkEnergy() {
//       console.log(`Energy is currently at ${this.energyLevel}%.`)
//     }
// }
  
// robot.checkEnergy();
//==========================================================================
// Privacy
// const bankAccount = {
//     _amount: 1000
//   }
// bankAccount._amount = 1000000;

// const robot = {
//     _energyLevel: 100,
//     recharge(){
//       this._energyLevel += 30;
//       console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
//     }
//   };
  
//   robot._energyLevel = 'high';
//   robot.recharge(); // output high30%. A side-effect of type-coercion
//==========================================================================
// Getters
// const person = {
//     _firstName: 'John',
//     _lastName: 'Doe',
//     get fullName() {
//       if (this._firstName && this._lastName){
//         return `${this._firstName} ${this._lastName}`;
//       } else {
//         return 'Missing a first name or a last name.';
//       }
//     }
// }
   
//   // To call the getter method: 
// console.log(person.fullName); // 'John Doe'

// const robot = {
//     _model: '1E78V2',
//     _energyLevel: 100,
//     get energyLevel() {
//       if (typeof this._energyLevel === 'number'){
//         return `My current energy level is ${this._energyLevel}`
//       } else {
//         return 'System malfunction: cannot retrieve energy level'
//       }
//     }
//   };
  
//   console.log(robot.energyLevel);
//==========================================================================
// Setters
// const person = {
//     _age: 37,
//     set age(newAge){
//       if (typeof newAge === 'number'){
//         this._age = newAge;
//       } else {
//         console.log('You must assign a number to age');
//       }
//     }
// };

// person.age = 40;
// console.log(person._age);
// person.age = '70';
// console.log(person._age);
// person._age = 'forty-five'
// console.log(person._age); // Prints forty-five

// const robot = {
//     _model: '1E78V2',
//     _energyLevel: 100,
//     _numOfSensors: 15,
//     get numOfSensors(){
//       if(typeof this._numOfSensors === 'number'){
//         return this._numOfSensors;
//       } else {
//         return 'Sensors are currently down.'
//       }
//     },
//     set numOfSensors(num){
//       if(typeof num === 'number' && num >= 0){
//         this._numOfSensors = num;
//       } else {
//         console.log('Pass in a number that is greater than or equal to 0');
//       }
//     }
//   };
  
//   robot.numOfSensors = 100; // Use the setter method
//   console.log(robot.numOfSensors); // Use the getter method
//==========================================================================
// Factory functions
// const monsterFactory = (name, age, energySource, catchPhrase) => {
//     return { 
//       name: name,
//       age: age, 
//       energySource: energySource,
//       scare() {
//         console.log(catchPhrase);
//       } 
//     }
// };

// const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
// ghost.scare(); // 'BOO!'
// console.log(ghost.name);

// const robotFactory = (model, mobile) => {
//     return {
//       model: model,
//       mobile: mobile,
//       beep() {
//         console.log('Beep Boop');
//       }
//     }
// };
  
// const tinCan = robotFactory('P-500', true);
// tinCan.beep();
// console.log(tinCan.mobile);
//==========================================================================
// Property Value Shorthand
// function robotFactory(model, mobile){
//     return {
//       model,
//       mobile,
//       beep() {
//         console.log('Beep Boop');
//       }
//     }
// }
  
// // To check that the property value shorthand technique worked:
// const newRobot = robotFactory('P-501', false)
// console.log(newRobot.model)
// console.log(newRobot.mobile)
//==========================================================================
//Destructured Assignment
// const vampire = {
//     name: 'Dracula',
//     residence: 'Transylvania',
//     preferences: {
//       day: 'stay inside',
//       night: 'satisfy appetite'
//     }
// };

// // const residence = vampire.residence; 
// // console.log(residence); // Prints 'Transylvania' 

// const { residence } = vampire; 
// console.log(residence); // Prints 'Transylvania'

// const { day } = vampire.preferences; 
// console.log(day); // Prints 'stay inside'

// const robot = {
//     model: '1E78V2',
//     energyLevel: 100,
//     functionality: {
//       beep() {
//         console.log('Beep Boop');
//       },
//       fireLaser() {
//         console.log('Pew Pew');
//       },
//     }
// };
  
// const { functionality } = robot;
  
// functionality.beep();
// functionality.fireLaser();
//==========================================================================
// Built-in Object Methods
// const object1 = {
//     a: 'somestring',
//     b: 42,
//     c: false
// };

// console.log(Object.keys(object1));
// // expected output: Array ["a", "b", "c"]
//============================================
//   const object2 = {
//     a: 'somestring',
//     b: 42
// };
  
// for (const [key, value] of Object.entries(object2)) {
//     console.log(`${key}: ${value}`);
// }

// objArr = Object.entries(object2);
// console.log(objArr);
// // expected output:
// // "a: somestring"
// // "b: 42"
//============================================
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);

// expected output: true
//==========================================================================
const robot = {
  model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};


const robotKeys = Object.keys(robot);
console.log(robotKeys);

const robotEntries = Object.entries(robot)
console.log(robotEntries[1]);

const target1 = {laserBlaster: true, voiceRecognition: true};
const newRobot = Object.assign(target1, robot);
//==========================================================================

