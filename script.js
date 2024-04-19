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

  const modal = document.getElementById('modal');
  const openModal = document.getElementById('open-button');
  const closeModal = document.getElementById('close-button');

  openModal.addEventListener('click', () => {
    modal.showModal();
  })

  closeModal.addEventListener('click', () => {
    modal.close();
  })

  const modalForm = document.getElementById('book-form');

  modalForm.addEventListener('submit', (event) => {
    event.preventDefault();

    //Capturing form data
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').value;

    const newBook = new Book (title, author, pages, read);

    myLibrary.push(newBook);
    console.log(newBook.info());
    modal.close();
  })
}


function displayLibrary() {

  myLibrary.forEach(book => {
    console.log(book.info());
  })
}

addBookToLibrary();
displayLibrary();