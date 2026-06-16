const MyBooks =  [];

function Book (name, author, year){
    this.name = name;
    this.author = author;
    this.year = year;
    this.id = 0;
}

function StoreBook(name, author, year){
    const book = new Book(name, author, year);
    book.id = crypto.randomUUID();

    MyBooks.push(book);

    console.log(book.name, book.author, book.year, book.id);
} 

const user_book = StoreBook("Joemer", "Joey", 1978);
console.log(MyBooks);