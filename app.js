let books = [];
let idx = 0;
function Book(title, author, pages, read = false) {
	this.id = idx++;
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

function addBooks(book) {
	books.push(book);
}

let book1 = new Book('Book 1', 'Phillip Musiime', 150);
let book2 = new Book('Book 2', 'Safa Erden', 250);
let book3 = new Book('Book 3', 'Safa Erden', 50);
let book4 = new Book('Book 4', 'Phillip Musiime', 100);

addBooks(book1);
addBooks(book2);
addBooks(book3);
addBooks(book4);

const container = document.querySelector('.container');
function render() {
	const displayBooks = books.map(function(item, index) {
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
	addBooks(newBook);
	render();
});

render();

function removeElement(id) {
	books = books.filter((items) => items.id != id);
	var element = document.getElementById(id);
	element.parentNode.removeChild(element);
	console.log(books);
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
