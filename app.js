console.log("Hello World!\n==========\n");

// PROJECT Section
console.log("PROJECT:\n==========\n");
// create a class book with id, title, author, read(boolean)
class Book {
  constructor(id, title, author, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.read = read;
  }
}
// class library with book count, books array, markread, addbook
class Library {
  constructor() {
    this.bookCount = 0;
    this.books = [];
  }

  markRead(checkbox, id) {
    this.books.forEach(book => {
      if (book.id === id) {
        book.read = true;
        checkbox.checked = true;
        checkbox.disabled = true;
      }
    });
  }

  addBook() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const read = document.getElementById('read').checked;

    const newBook = new Book(this.bookCount + 1, title, author, read);
    this.books.push(newBook);
    this.bookCount++;

    const tableBody = document.querySelector('#table tbody');
    const newRow = document.createElement('tr');

    const titleCell = document.createElement('td');
    titleCell.textContent = newBook.title;
    newRow.appendChild(titleCell);

    const authorCell = document.createElement('td');
    authorCell.textContent = newBook.author;
    newRow.appendChild(authorCell);

    const readCell = document.createElement('td');
    const readCheckbox = document.createElement('input');
    readCheckbox.type = 'checkbox';
    readCheckbox.checked = newBook.read;
    readCheckbox.disabled = newBook.read;
    readCheckbox.addEventListener('change', (e) => {
      this.markRead(e.target, newBook.id);
    });
    readCell.appendChild(readCheckbox);
    newRow.appendChild(readCell);

    tableBody.appendChild(newRow);
  }
}

const library = new Library();

document.getElementById('addBookButton').addEventListener('click', () => {
  library.addBook();
});
