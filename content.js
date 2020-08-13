function render() {
	const local = JSON.parse(localStorage.getItem('books'));
	let checked;
	const displayBooks = local.map((item) => {
		let newDiv = document.createElement('div');
		newDiv.className = 'book-item';
		newDiv.id = item.id;

		let newSpan1 = document.createElement('span');
		newSpan1.className = 'bold';
		newSpan1.textContent = 'Author: ' + item.author + '  ';

		let newSpan2 = document.createElement('span');
		newSpan2.className = 'bold';
		newSpan2.innerHTML = 'Title: ' + item.title + ' ';

		let newSpan3 = document.createElement('span');
		newSpan3.className = 'bold';
		newSpan3.innerHTML = 'Pages: ' + item.pages + ' ';

		let status = document.createElement('div');
		status.className = 'status-wrapper';

		let check = document.createElement('INPUT');
		check.setAttribute('type', 'checkbox');
		if (item.read === true) {
			check.setAttribute('checked', true);
		}
		check.className = 'status';
		check.id = 'status';
		check.name = 'status';

		let label = document.createElement('LABEL');
		label.textContent = 'Read   ';
		label.setAttribute('for', 'status');

		status.appendChild(check);
		status.appendChild(label);

		let remove = document.createElement('BUTTON');
		remove.className = 'remove-button btn btn-primary';
		remove.textContent = 'Remove';

		newDiv.appendChild(newSpan1);
		newDiv.appendChild(newSpan2);
		newDiv.appendChild(newSpan3);
		newDiv.appendChild(status);
		newDiv.appendChild(remove);

		container.appendChild(newDiv);
	});
}

export default render;
