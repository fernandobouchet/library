const booksSection = document.getElementById("books-section");
const booksForm = document.getElementById("book-form-container");
const bookName = document.getElementById("book-name");
const bookAuthor = document.getElementById("book-author");
const bookPages = document.getElementById("book-pages");
const bookStatus = document.getElementById("book-status");
let myLibrary = [];

function Book(title, author, pages, read) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.read = read);
  this.info = function () {
    return `${title} ${author} ${pages} ${read}`;
  };
}

function newBook() {
  const book = new Book(
    bookName.value,
    bookAuthor.value,
    bookPages.value,
    bookStatus.value
  );
  addBookToLibrary(book);
  clearForm();
  addBook(book);
}

function addBook(book) {
  const newBookDiv = document.createElement("div");
  newBookDiv.className = "book-div";
  newBookDiv.textContent = `Book name: ${book.title} Book Author: ${book.author} Book Pages: ${book.pages} Read Status: ${book.bookStatus}`;
  booksSection.appendChild(newBookDiv);
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function removeBookFromLibrary(book) {
  myLibrary.pull(book);
}

function showBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
    return myLibrary[i];
  }
}

function openBookForm() {
  booksForm.style.display = "flex";
}

function closeBookForm() {
  booksForm.style.display = "none";
}

function clearForm() {
  (bookName.value = ""),
    (bookAuthor.value = ""),
    (bookPages.value = ""),
    (bookStatus.value = "");
}
