// inheritence
function Book(title,author,year){
    this.title = title;
    this.author = author;
    this.year = year;
}

// getSummary
Book.prototype.getSummary = function(){
    return `${this.title} was written by ${this.author} in ${this.year}`;
}

// Magazie Constructor
function Magazine(title,author,year,month) {
    Book.call(this, title, author , year);
    this.month = month;
}
Magazine.prototype = Object.create(Book.prototype);
// Instantiate Magazine Obj
const mag1 = new Magazine('Mag one','John Doe','2018','Jan');

// Use Magazine Constructor
Magazine.prototype.constructor = Magazine;

// Inherit Prototype
console.log(mag1.getSummary());