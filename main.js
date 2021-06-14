class Media {
    constructor(title){
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = []; 
    }
    // create getter methods for all properties
    get title() {
      return this._title;
    }
  
     get isCheckedOut() {
      return this._isCheckedOut;
    }
  
    get ratings() {
      return this._ratings;
    }
  
    set isCheckedOut(value) {
      this._isCheckedOut = value;
    }
  
    toggleCheckOutStatus() {
      this.isCheckedOut = !this.isCheckedOut;
    }
  
    getAverageRating() {
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      const sum = this._ratings.reduce(reducer);
      return sum / this._ratings.length;
    }
  
    addRating(newRating) {
      this._ratings.push(newRating);
    }
  }
  
  class Book extends Media {
    constructor(author, title, pages){
      super(title);
      this._author = author;
      this._pages = pages; 
    }
  
    get author(){
      return this._author;
    }
    get pages(){
      return this._pages;
    }
  }
  
  class Movie extends Media {
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
  
  const historyOfEverything = new Book('Bill Byrson','A Short History of Nearly Everything', 544);
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckedOut);
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  console.log(historyOfEverything.getAverageRating());
  const speed = new Movie('Jan de Bont','Speed', 116);
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut);
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  console.log(speed.getAverageRating());

  /* could take this further by: 
  Add more properties to each class (movieCast, songTitles, etc.)
Create a CD class that extends Media.
In .addRating(), make sure input is between 1 and 5.
Create a method called shuffle for the CD class. The method returns a randomly sorted array of all the songs in the songs property.
Create class called Catalog that holds all of the Media items in our library. */ 
