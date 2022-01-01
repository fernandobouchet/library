const booksSection = document.getElementById("books-section");
const booksForm = document.getElementById("book-form-container");
const bookName = document.getElementById("book-name");
const bookAuthor = document.getElementById("book-author");
const bookPages = document.getElementById("book-pages");
const bookStatus = document.getElementById("book-status");
const deleteBtn = document.querySelectorAll(".delete-button");

let myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    (this.title = title),
      (this.author = author),
      (this.pages = pages),
      (this.read = read);
  }
}

function newBook() {
  const book = new Book(
    bookName.value,
    bookAuthor.value,
    bookPages.value,
    bookStatus.checked
  );
  if (bookName.value != "" && bookAuthor.value != "" && bookPages.value != "") {
    addBookToLibrary(book);
    reloadBooks(book);
    clearForm();
    closeBookForm();
  } else {
    alert("Book name, author or pages are empty");
  }
}

function createCard(book) {
  const newBookDiv = document.createElement("div");
  newBookDiv.className = "book-div";
  const newBookName = document.createElement("h3");
  const newBookAuthor = document.createElement("h3");
  const newBookPages = document.createElement("h3");
  const newBookRead = document.createElement("h3");
  const newBookStatus = document.createElement("button");
  newBookStatus.className = "read-button";
  newBookStatus.textContent = "Read";
  const deleteButton = document.createElement("button");
  deleteButton.className = "delete-button";
  newBookName.textContent = `Name: ${book.title}`;
  newBookAuthor.textContent = `Author: ${book.author}`;
  newBookPages.textContent = `Pages: ${book.pages}`;
  newBookRead.textContent = "Read: ";
  if (book.read === false) {
    book.read = "No";
  } else if (book.read === true) {
    book.read = "Yes";
  }
  newBookStatus.textContent = `${book.read}`;
  deleteButton.textContent = "Delete";
  newBookRead.appendChild(newBookStatus);
  newBookDiv.appendChild(newBookName);
  newBookDiv.appendChild(newBookAuthor);
  newBookDiv.appendChild(newBookPages);
  newBookDiv.appendChild(newBookRead);
  newBookDiv.appendChild(deleteButton);

  booksSection.appendChild(newBookDiv);

  deleteButton.addEventListener("click", () => {
    removeBook(book);
  });

  newBookStatus.addEventListener("click", () => {
    if (newBookStatus.textContent === "No") {
      newBookStatus.textContent = "Yes";
      book.read = true;
    } else {
      newBookStatus.textContent = "No";
      book.read = false;
    }
  });
}

function removeBook(book) {
  myLibrary.splice(myLibrary.indexOf(book), 1);
  reloadBooks();
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function reloadBooks() {
  removeBooks();
  myLibrary.forEach((book) => createCard(book));
}

function removeBooks() {
  document.querySelectorAll(".book-div").forEach((book) => book.remove());
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
    (bookStatus.checked = "");
}
