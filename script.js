const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read,
  this.info = function () { return (`"${title}" by ${author}, ${pages} pages, ${read} read`);}
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
    modal.close();
    displayLibrary();
  })
}


function displayLibrary() {
  const libraryDiv = document.getElementById('library-display');
  libraryDiv.innerHTML = '';

  myLibrary.forEach((book, index) => {
    //Display books on separate cards
    const card = document.createElement('div');
    card.classList.add('card');
    const cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = book.info();

    //Assign index as data attribute
    card.dataset.bookId = index;

    card.appendChild(cardText);
    libraryDiv.appendChild(card);

    //Remove button
  const removeDiv = document.createElement('div');
  removeDiv.classList.add('remove-div');
  const removeBtn = document.createElement('button');
  removeBtn.classList.add('remove-btn');
  removeBtn.textContent = 'X';

  removeDiv.appendChild(removeBtn);
  card.appendChild(removeDiv);
  })
  
  //Event delegation
  libraryDiv.addEventListener('click', (event) => {
    if(event.target.classList.contains('remove-btn')) {
      const card = event.target.closest('.card');
      const bookId = card.dataset.bookId;

      //Remove book from array
      myLibrary.splice(bookId, 1);

      displayLibrary();
    }
  })

}

addBookToLibrary();
