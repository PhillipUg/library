let books = [];

function Book(title, pages) {
  this.title = title;
  this.pages = pages;
};

function addBooks(book) {
  books.push(book);
};

let book1 = new Book("Book 1", 150);
let book2 = new Book("Book 2", 250);
let book3 = new Book("Book 3", 50);
let book4 = new Book("Book 4", 100);
let book5 = new Book("Book 5", 300);

addBooks(book1);
addBooks(book2);
addBooks(book3);
addBooks(book4);
addBooks(book5);

function render() {
  const displayBooks = books.map(function (item) {
    return `<div class="book-item">${item.title} => ${item.pages} pages</div>`;
  });
  return displayBooks.join("");
};

let container = document.querySelector(".container");
container.innerHTML = render();















