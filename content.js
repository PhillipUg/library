const container = document.querySelector('.container');
const addBook = document.getElementById('addBook');
const form = document.querySelector('.hidden');
const add = document.getElementById('add');

const authorValue = document.getElementById('author').value;
const titleValue = document.getElementById('title').value;
const pagesValue = document.getElementById('pages').value;

const checkboxes = document.querySelectorAll('#status');

export { container, addBook, add, form, authorValue, titleValue, pagesValue, checkboxes };
