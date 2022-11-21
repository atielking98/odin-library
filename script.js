let myLibrary = [];

function Book(title, author, pages, haveRead) {
  this.title = title
  this.author = author
  this.pages = pages
  this.haveRead = haveRead
  this.info = function() {
    return title + " by " + author + ", " + pages + 
        " pages long. Read already? " + (haveRead ? "Yes" : "No"); 
  }
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBooks() {
    myLibrary.forEach((book) => {
        return book;
    })
}