// Intro to classes
// class Dog {
//     constructor(name) {
//       this._name = name;
//       this._behavior = 0;
//     }
  
//     get name() {
//       return this._name;
//     }
//     get behavior() {
//       return this._behavior;
//     }   
  
//     incrementBehavior() {
//       this._behavior ++;
//     }
// }

// const halley = new Dog('Halley');
// console.log(halley.name); // Print name value to console
// console.log(halley.behavior); // Print behavior value to console
// halley.incrementBehavior(); // Add one to behavior
// console.log(halley.name); // Print name value to console
// console.log(halley.behavior); // Print behavior value to console
//============================================================================
// Constructor
// class Dog {
//     constructor(name) {
//       this.name = name;
//       this.behavior = 0;
//     }
// }

// class Surgeon {
//     constructor(name, department) {
//       this.name = name;
//       this.department = department;
//     }
//   }

//============================================================================
// Instance
// class Dog {
//     constructor(name) {
//       this.name = name;
//       this.behavior = 0;
//     } 
// }

// const halley = new Dog('Halley'); // Create new Dog instance
// console.log(halley.name); // Log the name value saved to halley
// // Output: 'Halley'

// class Surgeon {
//     constructor(name, department) {
//       this.name = name;
//       this.department = department;
//     }
// }

// const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
// const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');
// console.log(surgeonJackson.name);
//============================================================================
// Methods
// class Dog {
//     constructor(name) {
//       this._name = name;
//       this._behavior = 0;
//     }
   
//     get name() {
//       return this._name;
//     }
   
//     get behavior() {
//       return this._behavior;
//     }
   
//     incrementBehavior() {
//       this._behavior++;
//     }
//   }

//   class Surgeon {
//     constructor(name, department) {
//       this._name = name;
//       this._department = department;
//       this._remainingVacationDays = 20;
//     }
  
//     get name() {
//       return this._name;
//     }
  
//     get department() {
//       return this._department;
//     }
  
//     get remainingVacationDays() {
//       return this._remainingVacationDays;
//     }
  
//     takeVacationDays(daysOff) {
//       this._remainingVacationDays -= daysOff;
//     }
// }

// const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
// const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');
// surgeonRomero.takeVacationDays(5);
// console.log(surgeonRomero.remainingVacationDays)
//============================================================================
// Method Calls
// class Dog {
//     constructor(name) {
//       this._name = name;
//       this._behavior = 0;
//     }
   
//     get name() {
//       return this._name;
//     }
   
//     get behavior() {
//       return this._behavior;
//     }   
   
//     incrementBehavior() {
//       this._behavior++;
//     }
// }

// const halley = new Dog('Halley');

// let nikko = new Dog('Nikko'); // Create dog named Nikko
// nikko.incrementBehavior(); // Add 1 to nikko instance's behavior
// let bradford = new Dog('Bradford'); // Create dog name Bradford
// console.log(nikko.behavior); // Logs 1 to the console
// console.log(bradford.behavior); // Logs 0 to the console

// class Surgeon {
//     constructor(name, department) {
//       this._name = name;
//       this._department = department;
//       this._remainingVacationDays = 20;
//     }
    
//     get name() {
//       return this._name;
//     }
    
//     get department() {
//       return this._department;
//     }
    
//     get remainingVacationDays() {
//       return this._remainingVacationDays;
//     }
    
//     takeVacationDays(daysOff) {
//       this._remainingVacationDays -= daysOff;
//     }
// }

// const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
// const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');

// console.log(surgeonRomero.name);
// surgeonRomero.takeVacationDays(3);
// console.log(surgeonRomero.remainingVacationDays);
//============================================================================
// Inheritance I
// class Cat {
//     constructor(name, usesLitter) {
//       this._name = name;
//       this._usesLitter = usesLitter;
//       this._behavior = 0;
//     }
   
//     get name() {
//       return this._name;
//     }
   
//     get usesLitter() {
//       return this._usesLitter;
//     }
   
//     get behavior() {
//       return this._behavior;
//     }  
   
//     incrementBehavior() {
//       this._behavior++;
//     }
//   }

//   class Animal {
//     constructor(name) {
//       this._name = name;
//       this._behavior = 0;
//     }
   
//     get name() {
//       return this._name;
//     }
   
//     get behavior() {
//       return this._behavior;
//     }   
   
//     incrementBehavior() {
//       this._behavior++;
//     }
//   } 

//============================================================================
// Inheritance II
// class Animal {
//     constructor(name) {
//       this._name = name;
//       this._behavior = 0;
//     }
   
//     get name() {
//       return this._name;
//     }
   
//     get behavior() {
//       return this._behavior;
//     }   
   
//     incrementBehavior() {
//       this._behavior++;
//     }
//   } 

//   class Cat {
//     constructor(name, usesLitter) {
//       this._name = name;
//       this._usesLitter = usesLitter;
//       this._behavior = 0;
//     }
   
//     get name() {
//       return this._name;
//     }
   
//     get behavior() {
//       return this._behavior;
//     }
   
//     get usesLitter() {
//       return this._usesLitter;
//     }
   
//     incrementBehavior() {
//       this._behavior++;
//     }
//   } 
//   class HospitalEmployee {
//     constructor(name) {
//       this._name = name;
//       this._remainingVacationDays = 20;
//     }
  
//     get name() {
//       return this._name;
//     }
  
//     get remainingVacationDays() {
//       return this._remainingVacationDays;
//     }
  
//     takeVacationDays(daysOff) {
//       this._remainingVacationDays -= daysOff;
//     }
//   }
//============================================================================
// Inheritance III

// class Animal {
//     constructor(name) {
//       this._name = name;
//       this._behavior = 0;
//     }
   
//     get name() {
//       return this._name;
//     }
   
//     get behavior() {
//       return this._behavior;
//     }
   
//     incrementBehavior() {
//       this._behavior++;
//     }
// } 

// class Cat extends Animal {
//     constructor(name, usesLitter) {
//       super(name);
//       this._usesLitter = usesLitter;
//     }
// }

// const bryceCat = new Cat('Bryce', false); 
// console.log(bryceCat._name); // output: Bryce

// class HospitalEmployee {
//   constructor(name) {
//     this._name = name;
//     this._remainingVacationDays = 20;
//   }

//   get name() {
//     return this._name;
//   }

//   get remainingVacationDays() {
//     return this._remainingVacationDays;
//   }

//   takeVacationDays(daysOff) {
//     this._remainingVacationDays -= daysOff;
//   }
// }

// class Nurse extends HospitalEmployee {
//   constructor(name, certifications) {
//     super(name);
//     this._certifications = certifications;
//   }
// }

// const nurseOlynyk = new Nurse("Olynyk", ["Trauma", "Pediatrics"]);
// console.log(nurseOlynyk)

//============================================================================
// Inheritance IV
// class Animal {
//   constructor(name) {
//     this._name = name;
//     this._behavior = 0;
//   }

//   get name() {
//     return this._name;
//   }

//   get behavior() {
//     return this._behavior;
//   }

//   incrementBehavior() {
//     this._behavior++;
//   }
// }

// class Cat extends Animal {
//   constructor(name, usesLitter) {
//     super(name);
//     this._usesLitter = usesLitter;
//   }
// }

// const bryceCat = new Cat("Bryce", false);
// console.log(bryceCat.name);
// bryceCat.incrementBehavior(); // Call .incrementBehavior() on Cat instance
// console.log(bryceCat.behavior); // Log value saved to behavior

// class HospitalEmployee {
//   constructor(name) {
//     this._name = name;
//     this._remainingVacationDays = 20;
//   }

//   get name() {
//     return this._name;
//   }

//   get remainingVacationDays() {
//     return this._remainingVacationDays;
//   }

//   takeVacationDays(daysOff) {
//     this._remainingVacationDays -= daysOff;
//   }
// }

// class Nurse extends HospitalEmployee {
//   constructor(name, certifications) {
//     super(name);
//     this._certifications = certifications;
//   }
// }

// const nurseOlynyk = new Nurse("Olynyk", ["Trauma", "Pediatrics"]);
// nurseOlynyk.takeVacationDays(5);
// console.log(nurseOlynyk.remainingVacationDays);
  
//============================================================================
// Inheritance V
// class Cat extends Animal {
//   constructor(name, usesLitter) {
//     super(name);
//     this._usesLitter = usesLitter;
//   }

//   get usesLitter() {
//     return this._usesLitter;
//   }
// }

// class Dog extends Animal {
//   constructor(name) {
//     super(name);
//   }
// }

// class HospitalEmployee {
//   constructor(name) {
//     this._name = name;
//     this._remainingVacationDays = 20;
//   }

//   get name() {
//     return this._name;
//   }

//   get remainingVacationDays() {
//     return this._remainingVacationDays;
//   }

//   takeVacationDays(daysOff) {
//     this._remainingVacationDays -= daysOff;
//   }
// }

// class Nurse extends HospitalEmployee {
//   constructor(name, certifications) {
//     super(name);
//     this._certifications = certifications;
//   }

//   get certifications() {
//     return this._certifications;
//   }

//   addCertification(newCertification) {
//     this._certifications.push(newCertification);
//   }
// }

// const nurseOlynyk = new Nurse("Olynyk", ["Trauma", "Pediatrics"]);
// nurseOlynyk.takeVacationDays(5);
// console.log(nurseOlynyk.remainingVacationDays);
// nurseOlynyk.addCertification("Genetics");
// console.log(nurseOlynyk.certifications);
//============================================================================
// Static Methods
// class Animal {
//   constructor(name) {
//     this._name = name;
//     this._behavior = 0;
//   }

//   static generateName() {
//     const names = ["Angel", "Spike", "Buffy", "Willow", "Tara"];
//     const randomNumber = Math.floor(Math.random() * 5);
//     return names[randomNumber];
//   }
// }

// console.log(Animal.generateName()); // returns a name
// const tyson = new Animal("Tyson");
// tyson.generateName(); // TypeError

// class HospitalEmployee {
//   constructor(name) {
//     this._name = name;
//     this._remainingVacationDays = 20;
//   }

//   static generatePassword() {
//     return Math.floor(Math.random() * 10000);
//   }

//   get name() {
//     return this._name;
//   }

//   get remainingVacationDays() {
//     return this._remainingVacationDays;
//   }

//   takeVacationDays(daysOff) {
//     this._remainingVacationDays -= daysOff;
//   }
// }

// class Nurse extends HospitalEmployee {
//   constructor(name, certifications) {
//     super(name);
//     this._certifications = certifications;
//   }

//   get certifications() {
//     return this._certifications;
//   }

//   addCertification(newCertification) {
//     this.certifications.push(newCertification);
//   }
// }

// const nurseOlynyk = new Nurse("Olynyk", ["Trauma", "Pediatrics"]);
// nurseOlynyk.takeVacationDays(5);
// console.log(nurseOlynyk.remainingVacationDays);
// nurseOlynyk.addCertification("Genetics");
// console.log(nurseOlynyk.certifications);

// console.log(HospitalEmployee.generatePassword());
//============================================================================


//============================================================================

//============================================================================