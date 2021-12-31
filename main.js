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
}

function newBook() {
  const book = new Book(
    bookName.value,
    bookAuthor.value,
    bookPages.value,
    bookStatus.checked
  );
  console.log(book);
  addBookToLibrary(book);
  addBook(book);
  clearForm();
}

function addBook(book) {
  const newBookDiv = document.createElement("div");
  newBookDiv.className = "book-div";
  const newBookName = document.createElement("h3");
  const newBookAuthor = document.createElement("h3");
  const newBookPages = document.createElement("h3");
  const newBookStatus = document.createElement("h3");
  newBookName.textContent = `Name: ${book.title}`;
  newBookAuthor.textContent = `Author: ${book.author}`;
  newBookPages.textContent = `Pages: ${book.pages}`;
  newBookStatus.textContent = `Read Status: ${book.read}`;
  newBookDiv.appendChild(newBookName);
  newBookDiv.appendChild(newBookAuthor);
  newBookDiv.appendChild(newBookPages);
  newBookDiv.appendChild(newBookStatus);

  booksSection.appendChild(newBookDiv);
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function removeBookFromLibrary(book) {
  myLibrary.pull(this.book);
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
