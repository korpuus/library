const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read,
  this.info = function () { return (`"${title}" by ${author}, ${pages} pages`);}
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'yes');
myLibrary.push(theHobbit);

const theShit = new Book ('The Shot', 'Ted Shit', '169', 'no');
myLibrary.push(theShit);

const theClass = new Book ('The Class', 'Adam Apple', '190', 'yes');
myLibrary.push(theClass);

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
    // Create card elements
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
    removeBtn.textContent = 'x';

    removeDiv.appendChild(removeBtn);
    card.appendChild(removeDiv);

    removeBtn.addEventListener('click', function() {
      const buttonIndex = this.parentElement.dataset.bookId; // Get card index from data attribute
      myLibrary.splice(buttonIndex, 1); 
      displayLibrary();
    });

    //Read button

    const readBtn = document.createElement('button');
    readBtn.classList.add('read-btn');
    readBtn.textContent = 'read';
    readBtn.textContent = book.read === 'no' ? 'Not read' : 'Read';

    removeDiv.appendChild(readBtn);

    readBtn.addEventListener('click', () => {
      book.read = book.read === 'yes' ? 'no' : 'yes';
      displayLibrary();
    })

  });
}
addBookToLibrary();