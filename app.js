let books = [];
let idx = 0;

function Book(title, author, pages, read = false) {
	idx += 1;
	this.id = idx;
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

function addBooks(book) {
	books.push(book);
}

const book1 = new Book('Book 1', 'Phillip Musiime', 150);
const book2 = new Book('Book 2', 'Safa Erden', 250);
const book3 = new Book('Book 3', 'Safa Erden', 50);
const book4 = new Book('Book 4', 'Phillip Musiime', 100);

addBooks(book1);
addBooks(book2);
addBooks(book3);
addBooks(book4);

// render the content

function render() {
	const container = document.querySelector('.container');
	const displayBooks = books.map(
		(item) =>
			`<div class="book-item" id=${item.id}> Author: ${item.author} =>  Title: ${item.title} =>  ${item.pages} pages <input type="checkbox" id="status" name="status"> <label for="status">Read &nbsp; &nbsp;</label> <button onclick="removeElement(${item.id})">Remove</button> </div>`
	);
	container.innerHTML = displayBooks.join('');
}

//reveal form
const addBook = document.getElementById('addBook');
const form = document.querySelector('.hidden');
addBook.addEventListener('click', () => {
	form.classList.toggle('hidden');
});

// add books
const add = document.getElementById('add');
add.addEventListener('click', (e) => {
	e.preventDefault();
	const author = document.getElementById('author').value;
	const title = document.getElementById('title').value;
	const pages = document.getElementById('pages').value;
	const newBook = new Book(title, author, pages);
	addBooks(newBook);
	render();
});

render();

//remove element
function removeElement(id) {
	books = books.filter((items) => items.id !== id);
	const element = document.getElementById(id);
	element.parentNode.removeChild(element);
}

//Update status
Book.prototype.updateStatus = (id) => {
	books[id].read === false ? (books[id].read = true) : (books[id].read = false);
};

const items = document.querySelectorAll('#status');
items.forEach((box) => {
	box.addEventListener('click', (e) => {
		const idx = e.currentTarget.parentNode.id;
		books[idx - 1].updateStatus(idx - 1);
		console.log(books[idx - 1].read);
	});
});
