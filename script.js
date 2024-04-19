const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read,
  this.info = function () { return (`${title} by ${author}, ${pages} pages, ${read} read`);}
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'no');
myLibrary.push(theHobbit);

const theShit = new Book ('The Shot', 'Ted Shit', '169', 'yes');
myLibrary.push(theShit);

displayLibrary();

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
    displayLibrary();
  })
}


function displayLibrary() {
  const libraryDiv = document.getElementById('library-display');
  libraryDiv.innerHTML = '';

  myLibrary.forEach(book => {
    const card = document.createElement('div');
    card.classList.add('card');
    const cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = book.info();

    card.appendChild(cardText);
    libraryDiv.appendChild(card);

    console.log(book.info());
  })
}

addBookToLibrary();
