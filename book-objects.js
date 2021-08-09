let bookDisplay = document.querySelector('.display');
let form = document.querySelector('form');
let newBookBtn = document.getElementById('newBookBtn');
let submitBtn = document.getElementById('submitBtn');
let deleteBtn = document.getElementsByClassName('deleteBtn')
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
    // for (let i = 0; i < myLibrary.length; i++) {
    //     let book = myLibrary[i];

    //     let card = document.createElement('div');
    //     card.classList.add('card');

    //     for (let key in book) {
    //         if(book.hasOwnProperty(key)) {
    //             if (key === 'title') {
    //                 let title = document.createElement('div');  
    //                 title.textContent = book[key];
    //                 title.classList.add('title');
    
    //                 card.appendChild(title);
    //             } else {
    //                 let feature = document.createElement('div');
    //                 feature.textContent = book[key];
    //                 card.appendChild(feature);
    //             }
    //         }
    //     }

    //     bookDisplay.appendChild(card);
    // }
    // myLibrary = [];

    let lastBook = myLibrary[myLibrary.length - 1];
    let card = document.createElement('div');
    card.classList.add('card');

    for (let key in lastBook) {
        if(lastBook.hasOwnProperty(key)) {
            if (key === 'title') {
                let title = document.createElement('div');  
                title.textContent = lastBook[key];
                title.classList.add('title');

                card.appendChild(title);
            } else {
                let feature = document.createElement('div');
                feature.textContent = lastBook[key];
                card.appendChild(feature);
            }
        }
    }

    bookDisplay.appendChild(card);
}

submitBtn.addEventListener('click', function(e) {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').value;
    let notes = document.getElementById('notes').value;
    addBookToLibrary(title, author, pages, read, notes);
    displayBooks();

    form.reset();
})

newBookBtn.addEventListener('click', function() {
    if ((form.style.visibility === '') || (form.style.visibility === 'hidden')) {
        form.style.visibility = 'visible';
        newBookBtn.textContent = 'Remove form';
    } else {
        console
        form.style.visibility = 'hidden';
        newBookBtn.textContent = 'Add new book';
    }
})
