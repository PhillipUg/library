let len = 0;
if (JSON.parse(localStorage.getItem('books'))) {
  len = JSON.parse(localStorage.getItem('books')).length;
} else {
  localStorage.setItem('books', JSON.stringify([]));
}

let idx;
if (len === 0) {
  idx = 0;
} else {
  idx = JSON.parse(localStorage.getItem('books'))[len - 1].id + 1;
}

function Book(title, author, pages, read = false) {
  this.id = idx;
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
  let checked;
  const displayBooks = local.map((item) => {
    if (item.read === true) {
      checked = 'checked';
    } else {
      checked = '';
    }

    let newDiv = document.createElement("div");
    newDiv.className = "book-item";
    newDiv.id = item.id;
    console.log(newDiv);
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
}

addBook.addEventListener('click', () => {
  form.classList.toggle('hidden');
});

function clear() {
  document.getElementById('author').value = '';
  document.getElementById('title').value = '';
  document.getElementById('pages').value = '';
}

function addToLocalStorageArray(name, value) {
  const existing = JSON.parse(localStorage.getItem(name));
  existing.push(value);
  localStorage.setItem(name, JSON.stringify(existing));
  render();
}

add.addEventListener('click', () => {
  const authorValue = document.getElementById('author').value;
  const titleValue = document.getElementById('title').value;
  const pagesValue = document.getElementById('pages').value;
  const newBook = new Book(titleValue, authorValue, pagesValue);
  addToLocalStorageArray('books', newBook);
  clear();
});

render();

function updateLocalStorageArray(name, id) {
  const existing = JSON.parse(localStorage.getItem(name));
  existing.forEach((i) => {
    /* eslint-disable */
		if (i.id == id) {
			if (i.read === false) {
				i.read = true;
			} else {
				i.read = false;
			}
		}
	});
	/* eslint-enable */
  localStorage.setItem(name, JSON.stringify(existing));
}

const checkboxes = document.querySelectorAll('#status');

checkboxes.forEach((box) => {
  box.addEventListener('click', (e) => {
    const idx = e.currentTarget.parentNode.parentNode.id;
    updateLocalStorageArray('books', idx);
  });
});

/* eslint-disable */
function removeFromLocalStorageArray(name, id) {
	let existing = JSON.parse(localStorage.getItem(name));
	existing = existing.filter((items) => items.id !== id);
	localStorage.setItem(name, JSON.stringify(existing));
	location.reload();
}
/* eslint-enable */
