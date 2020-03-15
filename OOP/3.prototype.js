// Constructor
function Book(title,author,year){
    this.title = title;
    this.author = author;
    this.year = year;
}

// getSummary
Book.prototype.getSummary = function(){
    return `${this.title} was written by ${this.author} in ${this.year}`;
}

// getAge
Book.prototype.getAge = function(){
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
}

// Revis / change year
Book.prototype.revise = function(newYear) {
    this.year = newYear;
    this.revised = true;
}

// Instantiate an Object
const book1 = new Book('Book1','John doe','2011');
const book2 = new Book('Book2','Jane Doe','2016');

console.log(book1);
console.log(book1.getSummary());
console.log(book1.getAge());

console.log(book2);
book2.revise('2018');
console.log(book2);