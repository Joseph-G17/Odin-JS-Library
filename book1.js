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

    return book;
} 

function DisplayBook(){
    for(const book of MyBooks) {
        print(book);
    }
}

const user_book = StoreBook("Joemer", "Joey", 1978);
console.log(user_book);