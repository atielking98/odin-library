let myLibrary = [];

class Book {
constructor(
    title = 'Unknown',
    author = 'Unknown',
    pages = 0,
    isRead = false
) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
}
}

class Library {
    constructor() {
        this.myBooks = [];
    }
    addBook(newBook) {
        if (!this.isInLibrary(newBook)) {
            this.myBooks.push(newBook);
            console.log("Book Added!");
        }
    }

    isInLibrary(newBook) {
        return this.myBooks.some((book) => book.title === newBook.title)
    }
}


function displayBooks() {
    myLibrary.forEach((book) => {
        return book;
    })
}

const getBookFromInput = () => {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const isRead = document.getElementById('have-read').checked;
    return new Book(title, author, pages, isRead);
  }
  
const addBook = (e) => {
    e.preventDefault();
    const newBook = getBookFromInput();
    library.addBook(newBook);
}

const library = new Library();

const addBookForm = document.getElementById('book-form');
addBookForm.onsubmit = addBook;
