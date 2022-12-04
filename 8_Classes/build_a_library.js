class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }

  set isCheckedOut(newValue) {
    this._isCheckedOut = newValue;
  }

  // Use setter method and getter method
  toggleCheckedOutStatus() {
    this.isCheckedOut = !this.isCheckedOut;
  }

  getAverageRating() {
    // let ratingsSum = this.ratings.reduce((accumulator, rating) => {
    //   return accumulator + rating;
    // }, 0);
    // Shorthand without curlybraces and return keyword
    let ratingsSum = this.ratings.reduce((accumulator, rating) => accumulator + rating);
    return ratingsSum / this.ratings.length;
  }

  addRating(newRating) {
    this.ratings.push(newRating);
  }
}

class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
}

class Movies extends Media{
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
}

const historyOfEverything = new Book('Bill Bryson', 'A Shirt History of Nearly Everything', 544)
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.toggleCheckedOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

const speed = new Movies('Jan de Bont', 'Speed', 116);
speed.toggleCheckedOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());


/*
Future ideas:
- Add more properties to each class (movieCast, songTitles, etc.)
  - modify subclass constructor by adding more parameters
  - decide which property needs getters or setters
- Create a CD class that extends Media.
- In .addRating(), make sure input is between 1 and 5.
  - use Math.min and Math.max
- Create a method called shuffle for the CD class. The method returns a randomly sorted array of all the songs in the songs property.
  - use Math.random 
- Create class called Catalog that holds all of the Media items in our library.
  - new class that doesn't extend Media
  - use an addMedia method similar to addRating method
*/

// const test = new Media('test');
// console.log(test.title)
// console.log(test.isCheckedOut)
// console.log(test.ratings)
// test.isCheckedOut = true;
// console.log(test.isCheckedOut)
// test.toggleCheckedOutStatus()
// console.log(test.isCheckedOut)
// test.toggleCheckedOutStatus()
// console.log(test.isCheckedOut)
// console.log(test.getAverageRating())
// test.addRating(6)
// console.log(test.ratings)
// console.log(test.getAverageRating())