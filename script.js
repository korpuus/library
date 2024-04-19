const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read,
  this.info = function () { return (`${title} by ${author}, ${pages}, ${read}`);}
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'not read');
myLibrary.push(theHobbit); // Add initial book (optional)

function addBookToLibrary () {
  const title = document.getElementById('title');
  const author = document.getElementById('author');
  const pages = document.getElementById('pages');
  const read = document.getElementById('read');
  const submitButton = document.getElementById('submitButton');

  submitButton.addEventListener('click', () => {
    const newTitle = title.value;
    const newAuthor = author.value;
    const newPages = pages.value;
    const newRead = read.value;

    const newBook = new Book(newTitle, newAuthor, newPages, newRead);
    myLibrary.push(newBook);

  })
}


function displayLibrary() {
  const libraryContainer = document.getElementById('library-container');

  myLibrary.forEach(book => {
    const infoElement = document.createElement('p');
    infoElement.textContent = book.info();
    libraryContainer.appendChild(infoElement);
  })
}

addBookToLibrary();
displayLibrary();