const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read,
  this.info = function () { return (`${title} by ${author}, ${pages}, ${read}`);}
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'not read');

console.log(theHobbit.info());

function addBookToLibrary () {
  const title = document.getElementById('title');
  const author = document.getElementById('author');
  const pages = document.getElementById('pages');
  const readYes = document.getElementById('readYes');
  const readNo = document.getElementById('readNo');
  const submitButton = document.getElementById('submitButton');

  submitButton.addEventListener('click', () => {
    const newTitle = titleInput.value;
    const newAuthor = authorInput.value;
    const newPages = pagesInput.value;
    const newReadYes = readYesInput.value;
    const newReadNo = readNoInput.value;

    const newBook = new Book(newTitle, newAuthor, newPages, newReadYes, newReadNo)
    myLibrary.push(newBook);
  })
}