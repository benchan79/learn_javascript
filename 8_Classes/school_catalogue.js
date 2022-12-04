class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }

  set numberOfStudents(newValue) {
    if (typeof newValue === "number") {
      this._numberOfStudents = newValue;
    } else {
      console.log("Invalid input: numberOfStudents must be set to a Number.");
    }
    // if (isNaN(newValue)) {
    //   console.log("Invalid input: numberOfStudents must be set to a Number.");
    // } else {
    //   this._numberOfStudents = newValue;
    // }
  }

  quickFacts() {
    console.log(
      `${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`
    );
  }

  static pickSubstituteTeacher(substituteTeachers) {
    const randInt = Math.floor(Math.random() * substituteTeachers.length);
    return substituteTeachers[randInt];
  }
}

class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, "primary", numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, "high", numberOfStudents);
    this._sportsTeams = sportsTeams;
  }

  get sportsTeams() {
    console.log(this._sportsTeams);
    // return this._sportsTeams;
  }
}

const lorraineHansbury = new PrimarySchool(
  "Lorraine Hansbury",
  514,
  "Students must be picked up by a parent, guardian, or a family member over the age of 13."
);

lorraineHansbury.quickFacts();

const teacherArray = [
  "Jamal Crawford",
  "Lou Williams",
  "J. R. Smith",
  "James Harden",
  "Jason Terry",
  "Manu Ginobli",
];

const sub = School.pickSubstituteTeacher(teacherArray);
console.log(sub);

alSmith = new HighSchool("Al E. Smith", 415, [
  "Baseball",
  "Basketball",
  "Volleyball",
  "Track and Field",
]);

alSmith.sportsTeams;

/* Future Ideas:
- Create a middle school class
- Add more properties to each class (averageTestScores, schoolOverview, etc.)
- Create a class called SchoolCatalog that holds a collection of schools. Create an instance of SchoolCatalog for primary, middle, and high schools.
  - make a new class that does not extend School
  - have at least 2 parameters
    - level (primary, middle or high)
    - schools (an array that holds school objects)
    - add a verification step in an addSchool method to ensure you're adding the right level of schools
*/
const test = new School('asdf', 'middle', 100);
console.log(test.name);
console.log(test.level);
console.log(test.numberOfStudents);
test.numberOfStudents = 'x'
console.log(test.numberOfStudents);
test.numberOfStudents = 200
console.log(test.numberOfStudents);
// test.quickFacts();
