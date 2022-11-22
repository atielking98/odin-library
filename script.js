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

    getBook(title) {
        return this.books.find((book) => book.title === title);
    }

    removeBook(title) {
        this.books = this.books.filter((book) => book.title !== title);
    }

    isInLibrary(newBook) {
        return this.books.some((book) => book.title === newBook.title);
    }
}

const library = new Library();
const bookCards = document.getElementById('book-cards');
const addBookForm = document.getElementById('book-form');

const createBookCard = (book) => {
  const bookCard = document.createElement('div');
  const title = document.createElement('h3');
  const author = document.createElement('p');
  const pages = document.createElement('p');
  const buttonGroup = document.createElement('div');
  const readBtn = document.createElement('button');
  const removeBtn = document.createElement('button');

  readBtn.onclick = toggleRead;
  removeBtn.onclick = removeBook;

  bookCard.classList.add('book-card');
  buttonGroup.classList.add('button-group');

  title.textContent = `"${book.title}"`;
  author.textContent = `by ${book.author}`;
  pages.textContent = `${book.pages} pages`;
  removeBtn.textContent = 'Remove'

  if (book.haveRead) {
    readBtn.textContent = 'Read';
    readBtn.classList.add('btn-light-green');
  } else {
    readBtn.textContent = 'Not read';
    readBtn.classList.add('btn-light-red');
  }

  bookCard.appendChild(title);
  bookCard.appendChild(author);
  bookCard.appendChild(pages);
  buttonGroup.appendChild(readBtn);
  buttonGroup.appendChild(removeBtn);
  bookCard.appendChild(buttonGroup);
  bookCards.appendChild(bookCard);
}

const updateBooksDisplay = () => {
    resetBooksDisplay();
    library.books.forEach((book) => {
        createBookCard(book);
    })
}

const resetBooksDisplay = () => {
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
    updateBooksDisplay();
}

const toggleRead = (e) => {
    const title = e.target.parentNode.parentNode.firstChild.innerHTML.replaceAll(
        '"',
        ''
      );
    const book = library.getBook(title);
    book.haveRead = !book.haveRead;
    updateBooksDisplay();
}

const removeBook = (e) => {
    const title = e.target.parentNode.parentNode.firstChild.innerHTML.replaceAll(
        '"',
        ''
      );
    library.removeBook(title);
    updateBooksDisplay();
}

addBookForm.onsubmit = addBook;
