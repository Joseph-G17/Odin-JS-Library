const MyBooks =  [];

function Book (name, author, year, read){
    this.name = name;
    this.author = author;
    this.year = year;
    this.id = 0;
    this.read = read;
    
}

function StoreBook(name, author, year, read){
    const book = new Book(name, author, year, read);
    book.id = crypto.randomUUID();

    MyBooks.push(book);

    return book;
} 

function DisplayBooks(){
    for(const book of MyBooks) {
        print(book);
    }
}

/*const user_book = StoreBook("Joemer", "Joey", 1978);
console.log(user_book);
*/

const dialog = document.getElementById('newBookDialog');
const newBookBtn = document.querySelector('.new-book');

const myForm = document.querySelector("form");
const bookCard = document.querySelector('.book-cards');

const removeBtn = document.querySelector('.remove-btn');

newBookBtn.addEventListener('click', () => {
    dialog.showModal();
});

myForm.addEventListener('submit', (event) => {
    event.preventDefault(); //stops browser behavior, like reloading the page
    console.log('form was submitted');

    const data = new FormData(myForm);
    const name = data.get('user_book_name');
    const author = data.get('user_book_author');
    const year = data.get('user_book_year');
    let read = 'No';
    if(data.get('user_read') == "on")
        read = 'Yes';
    console.log(read);
    const book = StoreBook(name, author, year, read);

    const newCard = document.createElement('div');
    newCard.classList.add('card');
    newCard.setAttribute('data-book-id', book.id);
    newCard.innerHTML = 
    `
        <h4>Name: ${book.name}</h4>
        <p>Author: ${book.author}</p>
        <p>Year: ${book.year}</p>
        <p>Read: ${book.read}</p>
        <button class="remove-btn" type="submit"> Remove </button>
    `;

    bookCard.appendChild(newCard);
    myForm.reset();
});

removeBtn.addEventListener('submit', () => {
    
});