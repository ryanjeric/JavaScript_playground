// Object Of Protos
const bookProtos = {
    getSummary: function () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    },
    getAge: function () {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }
}

const book1 = Object.create(bookProtos);
book1.title = 'Book1';
book1.author = 'John doe';
book1.year   = '2013';

// const book1 = Object.create(bookProtos,{
//     title: {value : 'Book1'},
//     author: {value: 'John Doe'},
//     year: {value: '2013'}
// });

console.log(book1);