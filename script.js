let myLibrary = [];

class Book {
constructor(
    title = 'Unknown',
    author = 'Unknown',
    pages = 0,
    haveRead = false
) {
    this.title = title
    this.author = author
    this.pages = pages
    this.haveRead = haveRead
}
}

class Library {
    constructor() {
        this.books = [];
    }
    addBook(newBook) {
        console.log(newBook);
        if (!this.isInLibrary(newBook)) {
            this.books.push(newBook);
            console.log("Book Added!");
        }
    }

    removeBook(title) {
        this.books = this.books.filter((book) => book.title !== title);
    }

    isInLibrary(newBook) {
        return this.books.some((book) => book.title === newBook.title);
    }
}

function createBookCard(book) {
  const bookCard = document.createElement('div');
  const title = document.createElement('p');
  const author = document.createElement('p');
  const pages = document.createElement('p');
  const buttonGroup = document.createElement('div');
  const readBtn = document.createElement('button');
  const removeBtn = document.createElement('button');
}

function displayBooks() {
    resetBookCards();
    myLibrary.forEach((book) => {
        createBookCard(book);
    })
}

function resetBookCards() {
    bookCards.innerHTML = '';
}

const getBookFromInput = () => {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const haveRead = document.getElementById('have-read').checked;
    return new Book(title, author, pages, haveRead);
  }
  
const addBook = (e) => {
    e.preventDefault();
    const newBook = getBookFromInput();
    library.addBook(newBook);
}

const library = new Library();
const bookCards = document.querySelector('book-cards');
const addBookForm = document.getElementById('book-form');
addBookForm.onsubmit = addBook;
