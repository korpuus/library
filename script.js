const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read,
  this.info = function () { return (`${title} by ${author}, ${pages}, ${read}`);}
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'not read');
myLibrary.push(theHobbit);

const theShit = new Book ('The Shot', 'Ted Shit', '169 pages', 'yes read');
myLibrary.push(theShit);

function addBookToLibrary () {
  // const title = document.getElementById('title');
  // const author = document.getElementById('author');
  // const pages = document.getElementById('pages');
  // const read = document.getElementById('read');
  // const submitButton = document.getElementById('submitButton');

  const modal = document.getElementById('modal');
  const openModal = document.getElementById('open-button');
  const closeModal = document.getElementById('close-button');

  openModal.addEventListener('click', () => {
    modal.show();
  })

  closeModal.addEventListener('click', () => {
    modal.close();
  })
}


function displayLibrary() {

  myLibrary.forEach(book => {
    console.log(book.info());
  })
}

displayLibrary();
addBookToLibrary();