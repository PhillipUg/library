let len = JSON.parse(localStorage.getItem('books')).length;
let idx;
if (len === 0) {
  idx = 0;
} else {
  idx = JSON.parse(localStorage.getItem('books'))[len - 1].id + 1;
}

function Book(title, author, pages, read = false) {
  this.id = idx++;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const container = document.querySelector('.container');
const addBook = document.getElementById('addBook');
const form = document.querySelector('.hidden');
const add = document.getElementById('add');


function render() {
  const local = JSON.parse(localStorage.getItem('books'));
  const displayBooks = local.map(function (item) {
    if (item.read === true) {
      checked = 'checked';
    } else {
      checked = "";
    }
    return `<div class="book-item" id=${item.id}>
    Author: ${item.author} => 
    Title: ${item.title} => 
    ${item.pages} pages
    <input type="checkbox" id="status" name="status" class="status" ${checked}>
    <label for="status">Read &nbsp; &nbsp;</label>
    <button onclick="removeFromLocalStorageArray('books',${item.id})">Remove</button>
    </div>`;

  });
  container.innerHTML = displayBooks.join('');
};


addBook.addEventListener('click', () => {
  form.classList.toggle('hidden');
});


function clear() {
  document.getElementById('author').value = "";
  document.getElementById('title').value = "";
  document.getElementById('pages').value = "";
}


add.addEventListener('click', () => {
  const authorValue = document.getElementById('author').value;
  const titleValue = document.getElementById('title').value;
  const pagesValue = document.getElementById('pages').value;
  let newBook = new Book(titleValue, authorValue, pagesValue);
  addToLocalStorageArray('books', newBook);
  clear();
});

render();

const checkboxes = document.querySelectorAll('#status');

checkboxes.forEach((box) => {
  box.addEventListener('click', (e) => {
    let idx = e.currentTarget.parentNode.id;
    updateLocalStorageArray('books', idx);

  });
});

function addToLocalStorageArray(name, value) {
  let existing = JSON.parse(localStorage.getItem(name));
  existing.push(value);
  localStorage.setItem(name, JSON.stringify(existing));
  render();
}


function removeFromLocalStorageArray(name, id) {
  let existing = JSON.parse(localStorage.getItem(name));
  existing = existing.filter((items) => items.id !== id);
  localStorage.setItem(name, JSON.stringify(existing));
  location.reload();
}

function updateLocalStorageArray(name, id) {
  let existing = JSON.parse(localStorage.getItem(name));
  let item = existing.forEach((i) => {
    if (i.id == id) {
      if (i.read === false) {
        i.read = true;
      } else {
        i.read = false;
      }
    }
  })
  localStorage.setItem(name, JSON.stringify(existing));
}

