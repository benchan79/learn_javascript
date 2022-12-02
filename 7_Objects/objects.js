// Creating Object Literals
// An object literal with two key-value pairs
// let spaceship = {
//     'Fuel Type': 'diesel',
//     color: 'silver'
// };

// let fasterShip = {
//     'Fuel Type': 'Turbo Fuel',
//     color: 'silver'
// };
//================================================================================================
// Accessing Properties
// let spaceship = {
//     homePlanet: 'Earth',
//     color: 'silver',
//     'Fuel Type': 'Turbo Fuel',
//     numCrew: 5,
//     flightPath: ['Venus', 'Mars', 'Saturn']
//   };
  
// console.log(spaceship.homePlanet); // Returns 'Earth',
// console.log(spaceship.color); // Returns 'silver',
// let crewCount = spaceship.numCrew;
// let planetArray = spaceship.flightPath;
// console.log(crewCount);
// console.log(planetArray);
//================================================================================================
// Bracket Notation
// let spaceship = {
//     'Fuel Type' : 'Turbo Fuel',
//     'Active Duty' : true,
//     'Active Mission' : true,
//     homePlanet : 'Earth', 
//     numCrew: 5
//    };
// console.log(spaceship['Active Duty']);   // Returns true
// console.log(spaceship['Fuel Type']);   // Returns  'Turbo Fuel'
// console.log(spaceship['numCrew']);   // Returns 5
// console.log(spaceship['!!!!!!!!!!!!!!!']);   // Returns undefined

// let returnAnyProp = (objectName, propName) =>
//    objectName[propName];
// //    objectName.propName; // returns undefined because computer tries to look for a key of 'propName' on our object and not the value of the propName parameter

// console.log(returnAnyProp(spaceship, 'homePlanet'));

// let propName = 'Active Mission';
// let isActive = spaceship['Active Mission'];
// console.log(isActive);
// console.log(spaceship[propName]);
// console.log(spaceship['Active Mission']);
//================================================================================================
// Property Assignment
// const spaceship2 = {type: 'shuttle'};
// console.log(spaceship2);
// // spaceship2 = {type: 'alien'}; // TypeError: Assignment to constant variable.
// spaceship2.type = 'alien'; // Changes the value of the type property
// spaceship2.speed = 'Mach 5'; // Creates a new key of 'speed' with a value of 'Mach 5'
// console.log(spaceship2);

// const spaceship = {
//     'Fuel Type': 'Turbo Fuel',
//     homePlanet: 'Earth',
//     mission: 'Explore the universe' 
//   };
   
// delete spaceship.mission;  // Removes the mission property
// console.log(spaceship);

// let spaceship = {
//     'Fuel Type' : 'Turbo Fuel',
//     homePlanet : 'Earth',
//     color: 'silver',
//     'Secret Mission' : 'Discover life outside of Earth.'
// };
  
// console.log(spaceship);
// spaceship.color = 'glorious gold';
// spaceship.numEngines = 4;
// delete spaceship['Secret Mission'];

// console.log(spaceship);
//================================================================================================
// Methods
// let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// // Write your code below
// let alienShip = {
//   retreat() {
//     console.log(retreatMessage)
//   },
//   takeOff() {
//     console.log('Spim... Borp... Glix... Blastoff!')
//   }
// };

// alienShip.retreat();
// alienShip.takeOff();
//================================================================================================
// Nested Objects
// let spaceship = {
//     passengers: null,
//     telescope: {
//       yearBuilt: 2018,
//       model: "91031-XLT",
//       focalLength: 2032 
//     },
//     crew: {
//       captain: { 
//         name: 'Sandra', 
//         degree: 'Computer Engineering', 
//         encourageTeam() { console.log('We got this!') },
//        'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
//     },
//     engine: {
//       model: "Nimbus2000"
//     },
//     nanoelectronics: {
//       computer: {
//         terabytes: 100,
//         monitors: "HD"
//       },
//       'back-up': {
//         battery: "Lithium",
//         terabytes: 50
//       }
//     }
//   }; 
  
// let capFave = spaceship.crew.captain['favorite foods'][0];

// spaceship.passengers = [{name: 'Space Dog'}];

// let firstPassenger = spaceship.passengers[0];

// console.log(capFave);
// console.log(firstPassenger);
//================================================================================================
// 8. Pass By Reference
// const spaceship = {
//     homePlanet : 'Earth',
//     color : 'silver'
// };
   
// let paintIt = obj => {
//     obj.color = 'glorious gold'
// };

// paintIt(spaceship);

// spaceship.color // Returns 'glorious gold'
// console.log(spaceship);

// let spaceship = {
//     homePlanet : 'Earth',
//     color : 'red'
// };

// spaceship = 'haha';

// let tryReassignment = obj => {
//     console.log(obj)
//     obj = {
//         identified : false,
//         'transport type' : 'flying'
//     }
//     console.log(obj) // Prints {'identified': false, 'transport type' : flying}
// };

// tryReassignment(spaceship) // The attempt at reassignment does not work.

// console.log(spaceship); // Still returns {homePlanet : 'Earth', color : 'red'};

// spaceship = {
//     identified : false,
//     'transport type' : 'flying'
// }; // Regular reassignment still works because  it was declared with let

// console.log(spaceship);

// let spaceship = {
//   'Fuel Type' : 'Turbo Fuel',
//   homePlanet : 'Earth'
// };

// // Write your code below
// const greenEnergy = obj => {
//   obj['Fuel Type'] = 'avocado oil';
// }

// const remotelyDisable = obj => {
//   obj.disabled = true;
// }

// greenEnergy(spaceship);
// remotelyDisable(spaceship);

// console.log(spaceship);

//  pass by reference (arrays is an object)
// let a = [];
// let b = a;
// b.push(3);
// console.log(typeof a, typeof b)
// console.log(a);
// console.log(b);
// a.push(5);
// console.log(a);
// console.log(b);

// // pass by value (number is primitive type)
// let c = 5;
// let d = c;
// console.log(typeof c, typeof d)
// console.log(c);
// console.log(d);
// c = 1;
// console.log(c);
// console.log(d);

// // pass by reference (object type)
// let e = {name : 'John'};
// let f = e;
// console.log(e);
// console.log(f);
// e.name = 'Peter'
// console.log(e);
// console.log(f);

// // pass by value (string is primitive type)
// let myName = 'Sue';
// tryNameChange = (name) => {
//     name = 'Jane';
//     console.log(name);
// }
// tryNameChange(myName);
// console.log(myName);

// // pass by reference
// let myCar = {color: 'red', brand: 'BMW'};

// tryColorChange = (car) => {
//     car.color = 'blue';
//     console.log(car);
// }
// tryColorChange(myCar);
// console.log(myCar);

// // pass by value
// tryBrandChange = (car) => {
//     car = {brand: 'Toyota'};
//     console.log(car);
// }

// tryBrandChange(myCar)
// console.log(myCar);
//================================================================================================
let spaceship = {
    crew: {
      captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
      },
      'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
      },
      medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
      translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
      }
    }
  }; 
   
  // for...in
  for (let crewMember in spaceship.crew) {
    // console.log(typeof crewMember) // returns a string type not object
    // console.log(typeof spaceship.crew[crewMember]) // returns an object type
    console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
  }

  for (let crewMember in spaceship.crew){
    console.log(`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`);
  }