const book1 = {
    title: 'Book One',
    author: 'John doe',
    year: '2013',
    getSummary : function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}
const book2 = {
    title: 'Book Two',
    author: 'Jane doe',
    year: '2013',
    getSummary : function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}
console.log(book2.getSummary());
console.log(Object.values(book2));
console.log(Object.keys(book2));