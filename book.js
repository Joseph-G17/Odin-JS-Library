const MyBooks = [];

class Book {
    constructor(name, author, year) {
        this.name = name;
	    this.author = author;
	    this.year = year;
    }
	
	info() {
		return `${this.name} by ${this.author}, ${this.year}`;
	}
}

//MAIN/CONSOLE:

const user_book = new Book("A Christmas Carol", "Charles Dickens", 1843);
console.log(user_book.info());