let idx = 0;





function Book(title, author, pages, read = false) {
	this.id = idx++;
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

const container = document.querySelector('.container');



let local = JSON.parse(localStorage['books']);
function render() {
	const displayBooks = local.map(function (item) {
		return `<div class="book-item" id=${item.id}>
				Author: ${item.author} => 
				Title: ${item.title} => 
				${item.pages} pages
				<input type="checkbox" id="status" name="status">
				<label for="status">Read &nbsp; &nbsp;</label>
				<button onclick="removeElement(${item.id})">Remove</button>
				</div>`;
	});
	container.innerHTML = displayBooks.join('');
}

const addBook = document.getElementById('addBook');
const form = document.querySelector('.hidden');


addBook.addEventListener('click', () => {
	form.classList.toggle('hidden');
});

const add = document.getElementById('add');

add.addEventListener('click', (e) => {
	e.preventDefault();
	const author = document.getElementById('author').value;
	const title = document.getElementById('title').value;
	const pages = document.getElementById('pages').value;
	let newBook = new Book(title, author, pages);
	addToLocalStorageArray('books', newBook);

	render();
});

render();

function removeElement(id) {
	books = books.filter((items) => items.id != id);
	var element = document.getElementById(id);
	element.parentNode.removeChild(element);
}

Book.prototype.updateStatus = (id) => {
	books[id].read == false ? (books[id].read = true) : (books[id].read = false);
};

const items = document.querySelectorAll('#status');
items.forEach((box) => {
	box.addEventListener('click', (e) => {
		let idx = e.currentTarget.parentNode.id;
		books[idx].updateStatus(idx);
		console.log(books[idx]);
	});
});

// function updateStorage() {
// 	localStorage.setItem('books', JSON.stringify(books));
// }

function addToLocalStorageArray(name, value) {
	var existing = JSON.parse(localStorage.getItem(name));
	console.log(existing);
	existing.push(value);
	// localStorage.setItem(name, existing.toString());
	localStorage.setItem(name, JSON.stringify(value));
}
