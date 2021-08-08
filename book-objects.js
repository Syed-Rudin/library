let bookDisplay = document.querySelector('.display');
let newBook = document.getElementById('newBook');
let formData = new FormData(document.querySelector('form'));
let myLibrary = [];

function Book(title, author, pages, read, notes) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.notes = notes;
}

function addBookToLibrary(title, author, pages, read, notes) {
    let newBook = new Book(title, author, pages, read, notes);
    myLibrary.push(newBook);
}



function displayBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];

        let card = document.createElement('div');
        card.classList.add('card');

        for (let key in book) {
            if(book.hasOwnProperty(key)) {
                if (key === 'title') {
                    let title = document.createElement('div');  
                    title.textContent = book[key];
                    title.classList.add('title');
    
                    card.appendChild(title);
                } else {
                    let feature = document.createElement('div');
                    feature.textContent = book[key];
                    card.appendChild(feature);
                    console.log('got here');
                }
            }
        }

        bookDisplay.appendChild(card);
    }
}

addBookToLibrary('HP', 'JKR', 235, 'read', 'nice book');
addBookToLibrary('ATTWN', 'AC', 277, 'read', 'great book');
addBookToLibrary('HP', 'JKR', 235, 'read', 'nice book');
addBookToLibrary('ATTWN', 'AC', 277, 'read', 'great book');

displayBooks();