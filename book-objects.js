let bookDisplay = document.querySelector('.display');
let form = document.querySelector('form');
let newBookBtn = document.getElementById('newBookBtn');
let submitBtn = document.getElementById('submitBtn');
let myLibrary = [];

function Book(title, author, pages, read, notes) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    if (this.read === 'Y') {
        this.read = 'Read';
    } else if (this.read === 'N') {
        this.read = 'Not read';
    }
    this.notes = notes;
}

// Method to change read status
Book.prototype.changeReadStatus = function() {

    if (this.read === 'Read') {
        this.read = 'Not read';
    } else if (this.read === 'Not read') {
        this.read = 'Read';
    }
}

// Add a book to the library
function addBookToLibrary(title, author, pages, read, notes) {
    let newBook = new Book(title, author, pages, read, notes);
    myLibrary.push(newBook);
}


// Display the books in a card form
function displayBooks() {
    let lastBook = myLibrary[myLibrary.length - 1];
    let card = document.createElement('div');
    card.classList.add('card');

    for (let key in lastBook) {
        if(lastBook.hasOwnProperty(key)) {
            if (key === 'title') {
                let title = document.createElement('div');  
                title.textContent = lastBook[key];
                title.classList.add('title');

                let deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Delete';
                deleteBtn.classList.add('deleteBtn');

                deleteBtn.addEventListener('click', function(e) {
                    myLibrary = myLibrary.filter(book => book['title'] !== lastBook[key]);
                    card.remove();
                })
                
                title.appendChild(deleteBtn);
                card.appendChild(title);
            } else {
                let feature = document.createElement('div');
                feature.textContent = lastBook[key];

                // Check if key is 'read' 
                // Needed to add 'read or not' button
                if (key === 'read') {
                    feature.classList.add('read');
                    let readStatus = document.createElement('div');
                    feature.textContent = '';
                    readStatus.textContent = lastBook[key];
                    let readBtn = document.createElement('button');
                    readBtn.classList.add('readBtn');
                    
                    // Check if book is read and 
                    // assign button text appropriately
                    if (lastBook[key] === 'Read') {
                        readBtn.textContent = 'Not read?';
                    } else if (lastBook[key] === 'Not read') {
                        readBtn.textContent = 'Read?';
                    }

                    // Give read button functionality to change read status
                    readBtn.addEventListener('click', function() {
                        lastBook.changeReadStatus();
                        if (lastBook.read === 'Not read') {
                            readBtn.textContent = 'Read?';
                            readStatus.textContent = 'Not read';
                            console.log(readBtn.textContent);
                        } else if (lastBook.read === 'Read') {
                            readBtn.textContent = 'Not read?';
                            readStatus.textContent = 'Read';
                        }
                    });

                    feature.appendChild(readStatus);
                    feature.appendChild(readBtn);
                }

                card.appendChild(feature);
            }
        }
    }

    bookDisplay.appendChild(card);
}

// Allow form to be submitted and run 
// addBooktoLibrary() and displayBooks()
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

// Show or hide the form as required
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
